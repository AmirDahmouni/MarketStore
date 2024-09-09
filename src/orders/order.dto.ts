import { IsString, IsDecimal, IsBoolean, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsDecimal()
  totalAmount: number;

  @IsOptional()
  @IsBoolean()
  isPending?: boolean = true;
}

export class UpdateOrderDto {
  @IsOptional()
  @IsDecimal()
  totalAmount?: number;

  @IsOptional()
  @IsBoolean()
  isPending?: boolean;
}
