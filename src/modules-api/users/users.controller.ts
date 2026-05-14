import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserSideAdminDto } from './dto/update-user-side-Admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from './../../common/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // Profile
  @Get('me')
  getMe(@Request() req: any) {
    const result = this.usersService.getMe(req.user);

    return result;
  }
  @Patch('me')
  updateSideUser(
    @Body()
    updateSideUserDto: UpdateUserSideAdminDto,
    @Request() req: any,
  ) {
    const result = this.usersService.updateSideUser(updateSideUserDto, req);
    return result;
  }
  // Upload-Avatar
  @Post('upload-avatar')
  @UseInterceptors(FileInterceptor('file'))
  uploadAvatar(@UploadedFile() file: Express.Multer.File, @Request() req: any) {
    const result = this.usersService.uploadAvatar(file, req);
    return result;
  }
  // Get List User
  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('keyword') keyword?: string,
  ) {
    return this.usersService.findAll(
      Number(page),
      Number(pageSize),
      keyword ? keyword : '',
    );
  }
  // Search
  @Get('search')
  search(@Query('keyword') keyword: string) {
    const result = this.usersService.search(keyword);
    return result;
  }
  @Get('type')
  getType() {
    const result = this.usersService.getType();
    return result;
  }

  @Roles('ADMIN')
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    const result = this.usersService.create(createUserDto);
    return result;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const result = this.usersService.findOne(+id);
    return result;
  }
  @Roles('ADMIN')
  @Patch(':id')
  updateSideAdmin(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserSideAdminDto,
  ) {
    const result = this.usersService.updateSideAdmin(+id, updateUserDto);
    return result;
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.usersService.remove(+id);
    return result;
  }
  @Get(':id')
  @Roles('ADMIN')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }
  // Update User Admin
  @Patch(':id')
  @Roles('ADMIN')
  async updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserSideAdminDto,
  ) {
    return this.usersService.updateUser(Number(id), dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  async deleteUser(@Param('id') id: string, @Request() req: any) {
    return this.usersService.deleteUser(Number(id), req.user.user.id);
  }
}
