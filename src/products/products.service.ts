import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './Product.dto';


@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  // Retrieve all products
  async getAllProducts() {
    return this.prisma.product.findMany({
      include: { order: true }, // Include related order information if needed
    });
  }

  // Retrieve product by ID
  async getProductById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { order: true }, // Include related order information if needed
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  // Create a new product
  async createProduct(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  // Update an existing product
  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  // Delete a product
  async deleteProduct(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
