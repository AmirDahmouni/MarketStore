import { IsString, IsNotEmpty, IsDecimal, IsInt, Min, MaxLength, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDecimal()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  @IsInt()
  @IsNotEmpty()
  orderId: number; // Assuming orderId is required to link product to an order
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDecimal()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;
}
