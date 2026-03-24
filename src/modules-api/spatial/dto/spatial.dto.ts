import { IsNotEmpty, IsNumber } from 'class-validator';

export class PointDto {
  @IsNotEmpty()
  @IsNumber()
  lat!: number;
  @IsNotEmpty()
  @IsNumber()
  lng!: number;
}

export class LandResult {
  gid?: number;
  loai_dat?: string;
  dien_tich?: number;
  ma_xa?: string;
  so_to?: number;
  so_thua?: number;
}
