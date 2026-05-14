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
export class CreateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  full_name?: string;

  @Transform(({ value }) => value.trim().toLowerCase())
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'Number phone must at most 10 characters' })
  phone!: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
    message:
      'Password must contain at least one letter , one uppercase letter and one number',
  })
  password!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  avatar?: string;

  @IsOptional()
  @IsString()
  role?: string;
}
