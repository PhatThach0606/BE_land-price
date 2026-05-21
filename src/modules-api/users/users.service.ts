import { BadRequestException, Injectable, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserSideAdminDto } from './dto/update-user-side-Admin.dto';
import { UpdateSideUserDto } from './dto/update-user-side-User.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { CloudinaryService } from 'src/modules-system/cloudinary/cloudinary.service';
@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}
  // Profile
  getMe(user: any) {
    const id = user.id;
    const res = this.prismaService.users.findUnique({
      where: { user_id: id },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
      },
    });
    return res;
  }
  async updateSideUser(updateSideUserDto: UpdateSideUserDto, req: any) {
    const user_id = req.user.id;

    const { full_name, phone, avatar } = updateSideUserDto;
    const userExist = await this.prismaService.users.findUnique({
      where: {
        user_id,
      },
    });
    if (!userExist) {
      throw new BadRequestException('User not found');
    }

    const userUpdate = await this.prismaService.users.update({
      where: {
        user_id,
      },
      data: {
        full_name,
        phone,
        avatar,
      },
    });
    return {
      userId: userUpdate.user_id,
      full_name: userUpdate.full_name,
      email: userUpdate.email,
      phone: userUpdate.phone,
      avatar: userUpdate.avatar,
    };
  }
  async uploadAvatar(file: Express.Multer.File, req: any) {
    const result = await this.cloudinaryService.uploadAvatar(file);
    const user_id = req.user.id;
    const res = await this.prismaService.users.update({
      where: { user_id },
      data: { avatar: result.url },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
      },
    });
    return res;
  }

  async findAll(page: number, pageSize: number, keyword: string) {
    page = page < 1 ? 1 : page;
    pageSize = pageSize < 1 ? 10 : pageSize;
    const skips = (page - 1) * pageSize;
    const whereCondition = keyword
      ? {
          OR: [
            { full_name: { contains: keyword } },
            { email: { contains: keyword } },
            { phone: { contains: keyword } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prismaService.users.findMany({
        where: { ...whereCondition, is_deleted: false },
        skip: skips,
        take: pageSize,
        select: {
          user_id: true,
          full_name: true,
          email: true,
          phone: true,
          role: true,
          avatar: true,
          is_deleted: false,
        },
        orderBy: { user_id: 'asc' },
      }),
      this.prismaService.users.count({
        where: {
          ...whereCondition,
          is_deleted: false,
        },
      }),
    ]);

    const totalPage = Math.ceil(total / pageSize);
    if (page > totalPage && totalPage !== 0) {
      throw new BadRequestException('Page not found');
    }

    return {
      page,
      pageSize,
      total,
      totalPage,
      data,
    };
  }
  async getType() {
    const res = this.prismaService.users.findMany({
      select: {
        user_id: true,
        full_name: true,
        role: true,
      },
    });
    return res;
  }

  async search(keyword: string) {
    if (!keyword) {
      return [];
    }
    const res = await this.prismaService.users.findMany({
      where: {
        is_deleted: false,
        OR: [
          { full_name: { contains: keyword } },
          { email: { contains: keyword } },
          { phone: { contains: keyword } },
        ],
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
      },
    });
    return res;
  }
  // CRUD
  async create(createUserDto: CreateUserDto) {
    const { full_name, email, phone, password, avatar, role } = createUserDto;
    const userExist = await this.prismaService.users.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      throw new BadRequestException('Email already exist');
    }
    const newUser = this.prismaService.users.create({
      data: {
        full_name,
        email,
        phone,
        password,
        avatar,
        role,
      },
    });
    return newUser;
  }

  async findOne(id: number) {
    const userExist = await this.prismaService.users.findUnique({
      where: {
        user_id: id,
      },
    });
    if (!userExist) {
      throw new BadRequestException('User not found');
    }
    const userUnique = await this.prismaService.users.findUnique({
      where: {
        user_id: id,
        is_deleted: false,
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
      },
    });
    return userUnique;
  }

  async updateSideAdmin(
    id: number,
    updateSideAdminDto: UpdateUserSideAdminDto,
  ) {
    const { full_name, email, phone, avatar, role } = updateSideAdminDto;
    const userExist = await this.prismaService.users.findUnique({
      where: {
        user_id: id,
      },
    });
    if (!userExist) {
      throw new BadRequestException('User not found');
    }
    const userUpdate = await this.prismaService.users.update({
      where: {
        user_id: id,
      },
      data: {
        full_name,
        phone,

        avatar,
        role,
      },
    });
    return true;
  }

  async remove(id: number) {
    console.log(id);
    const userExist = this.prismaService.users.findUnique({
      where: {
        user_id: id,
      },
    });
    if (!userExist) {
      throw new BadRequestException('User not found');
    }
    await this.prismaService.users.update({
      where: {
        user_id: id,
      },
      data: {
        is_deleted: true,
      },
    });
    return true;
  }
  async getUserById(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid user id');
    }

    const user = await this.prismaService.users.findFirst({
      where: {
        user_id: id,
        is_deleted: false,
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async updateUser(id: number, dto: UpdateUserSideAdminDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid user id');
    }

    const user = await this.prismaService.users.findFirst({
      where: {
        user_id: id,
        is_deleted: false,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Check email duplicate (nếu update email)
    if (dto.email) {
      const emailExist = await this.prismaService.users.findFirst({
        where: {
          email: dto.email,
          NOT: { user_id: id },
        },
      });

      if (emailExist) {
        throw new BadRequestException('Email already exists');
      }
    }

    const updated = await this.prismaService.users.update({
      where: { user_id: id },
      data: {
        full_name: dto.full_name,
        email: dto.email,
        phone: dto.phone,
        avatar: dto.avatar,
        role: dto.role,
        updated_at: new Date(),
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        phone: true,
        role: true,
        avatar: true,
        updated_at: true,
      },
    });

    return updated;
  }
  async deleteUser(id: number, deletedBy: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid user id');
    }

    const user = await this.prismaService.users.findFirst({
      where: {
        user_id: id,
        is_deleted: false,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found or already deleted');
    }

    // Không cho tự xóa chính mình
    if (user.user_id === deletedBy) {
      throw new BadRequestException('You cannot delete yourself');
    }

    await this.prismaService.users.update({
      where: { user_id: id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: deletedBy,
      },
    });

    return {
      message: 'User deleted successfully',
    };
  }
}
