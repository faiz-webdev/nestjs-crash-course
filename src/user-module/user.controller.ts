import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @Post()
  postUser(@Body() user: IUser): IUser {
    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() email: string): IUser[] {
    return this.userService.deleteUser(email);
  }
}
