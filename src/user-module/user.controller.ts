import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Redirect,
  Req,
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
  @Redirect('')
  @Header('Cache-Control', 'nono')
  getUser(@Param() params: UserParamDto, @Req() req: Request): IUser {
    return this.userService.getUser(params.email);
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  async postUser(@Body() user: UserDto): Promise<IUser> {
    return await this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamDto): IUser[] {
    return this.userService.deleteUser(params.email);
  }
}
