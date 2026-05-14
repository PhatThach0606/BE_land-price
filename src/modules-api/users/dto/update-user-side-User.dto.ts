import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';
export class UpdateSideUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  full_name?: string;

  @Transform(({ value }) => value.trim().toLowerCase())
  @IsEmail({}, { message: 'Invalid email' })
  @IsOptional()
  @IsNotEmpty({ message: 'Email is required' })
  email?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'Number phone must at most 10 characters' })
  phone!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  avatar?: string;

  @IsOptional()
  @IsString()
  role?: string;
}
