import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [ProductService],
  controllers: [ProductController, PrismaService]
})
export class ProductsModule { }
