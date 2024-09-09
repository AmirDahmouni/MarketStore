import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) { }

  // Retrieve all orders
  async getAllOrders() {
    return this.prisma.order.findMany({
      include: { user: true, products: true },
    });
  }

  // Retrieve order by ID
  async getOrderById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { user: true, products: true },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  // Create a new order
  async createOrder(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  // Update an existing order
  async updateOrder(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  // Delete an order
  async deleteOrder(id: string) {
    const order = await this.prisma.order.findUnique({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.delete({
      where: { id },
    });
  }
}
