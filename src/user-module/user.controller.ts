import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Redirect,
  Req,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';
import { UserDto, UserParamDto } from './dto/user.dto';
import { HttpExceptionFilter } from './filter';
import { JoiValidationPipe } from './pipe';
import { createCatSchema } from './schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  @UseFilters(new HttpExceptionFilter())
  async getUser(@Param() params: UserParamDto): Promise<IUser> {
    try {
      return await this.userService.getUser(params.email);
    } catch (error) {
      throw new BadRequestException('test');
    }
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async postUser(@Body() user: IUser): Promise<IUser> {
    return await this.userService.addUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamDto): IUser[] {
    return this.userService.deleteUser(params.email);
  }
}
