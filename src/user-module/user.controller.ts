import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { UserDto, UserParamDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param() params: UserParamDto): IUser {
    return this.userService.getUser(params.email);
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  postUser(@Body() user: UserDto): IUser {
    return this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamDto): IUser[] {
    return this.userService.deleteUser(params.email);
  }
}
