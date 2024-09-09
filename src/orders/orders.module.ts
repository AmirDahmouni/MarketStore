import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [OrderService],
  controllers: [OrderController, PrismaService]
})
export class OrdersModule { }
