import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data) {
    return this.prisma.user.create({
      data,
    });
  }
}