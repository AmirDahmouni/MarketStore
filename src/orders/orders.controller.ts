import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  // Retrieve all orders
  @Get()
  async getAllOrders() {
    return this.orderService.getAllOrders();
  }

  // Retrieve an order by ID
  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.orderService.getOrderById(id);
  }

  // Create a new order
  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  // Update an existing order
  @Patch(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  // Delete an order
  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(id);
  }
}
