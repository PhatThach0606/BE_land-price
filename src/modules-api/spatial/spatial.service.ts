import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { PointDto } from './dto/spatial.dto.js';
import { FeatureCollectionGeoJson } from 'src/common/constant/responseGeoJson.constant';

@Injectable()
export class SpatialService {
  constructor(private prismaService: PrismaService) {}

  async findPositionLandLot(body: PointDto) {
    const { lat, lng } = body;
    if (lat === undefined || lng === undefined) {
      throw new BadRequestException('lat và lng bắt buộc');
    }
    const latitude = Number(lat);
    const longitude = Number(lng);

    if (
      Number.isNaN(latitude) ||
      Number.isNaN(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      throw new BadRequestException('lat/lng không hợp lệ');
    }
    const pointWKT = `POINT(${longitude} ${latitude})`;
    const lands = await this.prismaService.$queryRaw<any[]>`
    SELECT
      gid,
      loai_dat,
      dien_tich,
      ma_xa,
      so_to,
      so_thua,
      mathuadat,
      ST_AsGeoJSON(geom) AS geom
    FROM thuadat
    WHERE ST_Covers(geom, ST_SetSRID(ST_GeomFromText(${pointWKT}), 4326))
    LIMIT 1
  `;

    if (!lands.length) {
      throw new NotFoundException('Không tìm thấy thửa đất');
    }

    const land = lands[0];
    const landGeom = land.geom;
    const loaiDat = String(land.loai_dat || '')
      .trim()
      .toUpperCase();
    const dienTich = Number(land.dien_tich || 0);

    // =========================
    // 3. LOGIC TÌM VỊ TRÍ VÀ TUYẾN ĐƯỜNG (BAO SÂN CẢ ĐẤT KHÔNG CHẠM ĐƯỜNG)
    // =========================
    const roads = await this.prismaService.$queryRaw<any[]>`
    WITH hhem_chuan AS (
      -- Bước 1: Thử tìm các đoạn đường thực sự CHẠM (ST_Intersects) trước
      SELECT 
        gid, id, vi_tri, ten_duong, geom,
        ST_ClosestPoint(geom, ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326)) as diem_bat_dau,
        TRUE as co_cham
      FROM giaothong_logic
      WHERE ST_Intersects(geom, ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326))
    ),
    hhem_fallback AS (
      -- Bước 2: Nếu BƯỚC 1 rỗng (đất không chạm đường), tự động tìm đoạn giao thông GẦN THỬA ĐẤT NHẤT
      SELECT 
        gid, id, vi_tri, ten_duong, geom,
        ST_ClosestPoint(geom, ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326)) as diem_bat_dau,
        FALSE as co_cham
      FROM giaothong_logic
      WHERE NOT EXISTS (SELECT 1 FROM hhem_chuan) -- Chỉ kích hoạt khi hhem_chuan không có dữ liệu
      ORDER BY ST_Distance(ST_Transform(geom, 3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326), 3857)) ASC
      LIMIT 1
    ),
    hhem_tiep_giap AS (
      -- Gộp dữ liệu của 2 trường hợp lại
      SELECT * FROM hhem_chuan
      UNION ALL
      SELECT * FROM hhem_fallback
    ),
    xu_ly_vi_tri_1 AS (
      -- Bước 3A: Xử lý nếu đoạn bắt được trực tiếp là Vị trí 1
      SELECT 
        h.vi_tri as vi_tri_giao_thong,
        h.ten_duong as ten_duong_tiep_giap,
        h.diem_bat_dau,
        h.gid as banggia_gid,
        h.ten_duong,
        b.id AS banggia_id,
        COALESCE(b.odt, 0) as odt,
        COALESCE(b.tmd, 0) as tmd,
        COALESCE(b.skc, 0) as skc,
        b.doan_duong,
        h.diem_bat_dau as diem_giao_nhau,
        CASE WHEN h.co_cham THEN 0.0 ELSE ST_Distance(ST_Transform(h.diem_bat_dau, 3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326), 3857)) END AS distance_to_main_road
      FROM hhem_tiep_giap h
      LEFT JOIN banggiadat b ON h.id = b.id
      WHERE h.vi_tri = '1'
    ),
    xu_ly_hem AS (
      -- Bước 3B: Xử lý nếu đoạn bắt được là Hẻm (2, 3, 4). Tìm đường chính (vi_tri='1') gần hẻm này nhất để lấy giá
      SELECT DISTINCT ON (h.gid)
        -- Nếu đất không chạm đường, ép nó về Vị trí '4' theo nghiệp vụ của ní, còn nếu chạm hẻm thì giữ nguyên vị trí hẻm
        CASE WHEN h.co_cham THEN h.vi_tri ELSE '4' END as vi_tri_giao_thong,
        h.ten_duong as ten_duong_tiep_giap,
        h.diem_bat_dau,
        g.gid as banggia_gid,
        g.ten_duong,
        b.id AS banggia_id,
        COALESCE(b.odt, 0) as odt,
        COALESCE(b.tmd, 0) as tmd,
        COALESCE(b.skc, 0) as skc,
        b.doan_duong,
        ST_ClosestPoint(g.geom, h.diem_bat_dau) as diem_giao_nhau,
        -- Khoảng cách = (Từ thửa đất ra hẻm) + (Từ hẻm ra đường chính)
        ST_Distance(ST_Transform(h.diem_bat_dau, 3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(${landGeom}), 4326), 3857)) +
        ST_Distance(ST_Transform(diem_bat_dau, 3857), ST_Transform(ST_ClosestPoint(g.geom, h.diem_bat_dau), 3857)) AS distance_to_main_road
      FROM hhem_tiep_giap h
      CROSS JOIN giaothong_logic g
      LEFT JOIN banggiadat b ON g.id = b.id
      WHERE h.vi_tri IN ('2', '3', '4') 
        AND g.vi_tri = '1'
      ORDER BY h.gid, ST_Distance(ST_Transform(g.geom, 3857), ST_Transform(h.geom, 3857)) ASC
    ),
    gop_du_lieu AS (
      SELECT * FROM xu_ly_vi_tri_1
      UNION ALL
      SELECT * FROM xu_ly_hem
    ),
    tinh_toan_gia_du_kien AS (
      SELECT 
        *,
        CASE 
          WHEN ${loaiDat} LIKE '%ODT%' OR ${loaiDat} LIKE '%ONT%' THEN odt
          WHEN ${loaiDat} LIKE '%TMD%' OR ${loaiDat} LIKE '%TMV%' THEN tmd
          WHEN ${loaiDat} LIKE '%SKC%' THEN skc
          ELSE 0
        END as base_price_vt1
      FROM gop_du_lieu
    )
    SELECT * FROM tinh_toan_gia_du_kien
    ORDER BY 
      CAST(COALESCE(vi_tri_giao_thong, '4') AS INTEGER) ASC,
      CASE WHEN vi_tri_giao_thong = '1' THEN base_price_vt1 END DESC,
      distance_to_main_road ASC
    LIMIT 1
  `;

    const roadInfo = roads[0] ?? null;

    if (!roadInfo) {
      throw new NotFoundException(
        'Không tìm thấy tuyến đường hoặc lưới giao thông lân cận để áp giá',
      );
    }

    // =========================
    // 4. XÁC ĐỊNH VỊ TRÍ & HỆ SỐ MULTIPLIER
    // =========================
    let position = 1;
    if (
      roadInfo.vi_tri_giao_thong !== null &&
      roadInfo.vi_tri_giao_thong !== undefined
    ) {
      position = Number(roadInfo.vi_tri_giao_thong);
      if (Number.isNaN(position) || position < 1 || position > 4) {
        position = 4;
      }
    }

    let multiplier = 1.0;
    let tenHeSoThongTu = '100%';

    switch (position) {
      case 1:
        multiplier = 1.0;
        tenHeSoThongTu = '100%';
        break;
      case 2:
        multiplier = 0.5;
        tenHeSoThongTu = '50%';
        break;
      case 3:
        multiplier = 0.4;
        tenHeSoThongTu = '40%';
        break;
      case 4:
      default:
        multiplier = 0.32;
        tenHeSoThongTu = '32%';
        break;
    }

    const doSauMet =
      position === 1 ? 0 : Number(roadInfo.distance_to_main_road || 0);

    // =========================
    // 5. LẤY ĐƠN GIÁ VỊ TRÍ 1 TỪ BẢNG GIÁ ĐẤT
    // =========================
    const basePrice = Number(roadInfo.base_price_vt1 || 0);

    // =========================
    // 6. THÀNH TIỀN
    // =========================
    const SCALE = 1_000_000;
    const donGiaGoc = basePrice * SCALE;
    const donGiaApDung = donGiaGoc * multiplier;
    const tongGia = donGiaApDung * dienTich;

    // =========================
    // 7. RESPONSE TRẢ VỀ FRONT-END
    // =========================
    return FeatureCollectionGeoJson([
      {
        geom: JSON.parse(landGeom),
        properties: {
          gid: land.gid,
          loai_dat: loaiDat,
          dien_tich: dienTich,
          ma_xa: land.ma_xa,
          so_to: land.so_to,
          so_thua: land.so_thua,
          mathuadat: land.mathuadat,
          vi_tri: position,
          he_so_vi_tri: multiplier,
          ten_he_so_thong_tu: tenHeSoThongTu,
          do_sau_tinh_toan_m: doSauMet,
          don_gia_goc_vt1: donGiaGoc,
          don_gia_ap_dung: donGiaApDung,
          tong_gia: tongGia,
          tuyen_duong_tinh_gia: {
            banggia_id: roadInfo.banggia_id,
            ten_duong_chinh: roadInfo.ten_duong,
            doan_duong: roadInfo.doan_duong,
            odt_goc: roadInfo.odt,
            tmd_goc: roadInfo.tmd,
            skc_goc: roadInfo.skc,
          },
          tuyen_duong_tiep_giap: roadInfo.ten_duong_tiep_giap,
        },
      },
    ]);
  }
  // =====================================================
  // UPDATE LAND
  // =====================================================

  async updateLand(id: number, body: any) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid land id');
    }

    const { loai_dat, dien_tich, geom } = body;

    const landExist = await this.prismaService.$queryRaw<any[]>`
      SELECT gid
      FROM thuadat
      WHERE gid = ${id}
    `;

    if (!landExist.length) {
      throw new NotFoundException('Land not found');
    }

    let geomSQL = '';

    if (geom) {
      try {
        JSON.stringify(geom);

        geomSQL = `
          ST_SetSRID(
            ST_GeomFromGeoJSON('${JSON.stringify(geom)}'),
            4326
          )
        `;
      } catch {
        throw new BadRequestException('Invalid GeoJSON');
      }
    }

    await this.prismaService.$executeRawUnsafe(
      `
      UPDATE thuadat
      SET
        loai_dat = COALESCE($1, loai_dat),
        dien_tich = COALESCE($2, dien_tich),
        geom = COALESCE(${geomSQL || 'geom'}, geom)
      WHERE gid = $3
      `,
      loai_dat,
      dien_tich,
      id,
    );

    return {
      message: 'Update land success',
    };
  }

  // =====================================================
  // UPDATE ROAD
  // =====================================================

  async updateRoad(id: number, body: any) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid road id');
    }

    const { ten_duong, vi_tri, odt, tmd, skc, doan_duong, geom } = body;

    const roadExist = await this.prismaService.$queryRaw<any[]>`
      SELECT
        g.gid,
        g.id
      FROM giaothong_logic g
      WHERE g.gid = ${id}
    `;

    if (!roadExist.length) {
      throw new NotFoundException('Road not found');
    }

    const road = roadExist[0];

    let geomSQL = '';

    if (geom) {
      try {
        JSON.stringify(geom);

        geomSQL = `
          ST_SetSRID(
            ST_GeomFromGeoJSON('${JSON.stringify(geom)}'),
            4326
          )
        `;
      } catch {
        throw new BadRequestException('Invalid GeoJSON');
      }
    }

    // update bảng logic
    await this.prismaService.$executeRawUnsafe(
      `
      UPDATE giaothong_logic
      SET
        ten_duong = COALESCE($1, ten_duong),
        vi_tri = COALESCE($2, vi_tri),
        geom = COALESCE(${geomSQL || 'geom'}, geom)
      WHERE gid = $3
      `,
      ten_duong,
      vi_tri,
      id,
    );

    // update bảng giá đất
    await this.prismaService.$executeRaw`
      UPDATE banggiadat
      SET
        odt = COALESCE(${odt}, odt),
        tmd = COALESCE(${tmd}, tmd),
        skc = COALESCE(${skc}, skc),
        doan_duong = COALESCE(${doan_duong}, doan_duong)
      WHERE id = ${road.id}
    `;

    return {
      message: 'Update road success',
    };
  }

  // =====================================================
  // GET ROAD BY COORD
  // =====================================================

  // =====================================================
  // GET ROAD BY COORD
  // =====================================================

  async getRoadByCoord(body: PointDto) {
    const { lat, lng } = body;

    if (lat === undefined || lng === undefined) {
      throw new BadRequestException('lat và lng bắt buộc');
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      throw new BadRequestException('lat/lng ngoài giới hạn');
    }

    const pointWKT = `POINT(${lng} ${lat})`;

    const roads = await this.prismaService.$queryRaw<any[]>`
      SELECT
        g.gid,
        g.ten_duong,
        g.vi_tri,

        b.odt,
        b.tmd,
        b.skc,
        b.doan_duong, -- <--- BỔ SUNG LẤY ĐOẠN ĐƯỜNG Ở ĐÂY

        ST_AsGeoJSON(g.geom) AS geom,

        ST_Distance(
          ST_Transform(g.geom, 3857),
          ST_Transform(
            ST_GeomFromText(${pointWKT}, 4326),
            3857
          )
        ) AS distance

      FROM giaothong_logic g

      LEFT JOIN banggiadat b
        ON g.id = b.id

      ORDER BY ST_Distance(
        ST_Transform(g.geom, 3857),
        ST_Transform(
          ST_GeomFromText(${pointWKT}, 4326),
          3857
        )
      )

      LIMIT 1
    `;

    if (!roads.length) {
      throw new NotFoundException('Không tìm thấy đường');
    }

    const road = roads[0];
    const geom = JSON.parse(road.geom);
    const SCALE = 1_000_000;

    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: geom,
          properties: {
            gid: road.gid,
            ten_duong: road.ten_duong,
            doan_duong: road.doan_duong, // <--- BỔ SUNG TRẢ VỀ CHO FRONTEND Ở ĐÂY
            vi_tri: road.vi_tri,
            distance: Number(road.distance.toFixed(2)),
            price: {
              odt: road.odt ? road.odt * SCALE : null,
              tmd: road.tmd ? road.tmd * SCALE : null,
              skc: road.skc ? road.skc * SCALE : null,
            },
          },
        },
      ],
    };
  }
}
