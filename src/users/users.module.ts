import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [UserService],
  controllers: [UserController, PrismaService]
})
export class UsersModule { }
