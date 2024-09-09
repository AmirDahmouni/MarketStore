import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto) {
    return this.userService.createUser(createUserDto);
  }
}