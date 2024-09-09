import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './Product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  // Retrieve all products
  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  // Retrieve a product by ID
  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  // Create a new product
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  // Update an existing product
  @Patch(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  // Delete a product
  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
