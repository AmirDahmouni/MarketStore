import { IsString, IsEmail, IsBoolean, IsInt, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;

  @IsBoolean()
  isAdmin?: boolean = false; // Optional field with default value

  @IsInt()
  points?: number = 0; // Optional field with default value
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password?: string;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @IsOptional()
  @IsInt()
  points?: number;
}
