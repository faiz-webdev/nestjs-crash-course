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
import { ClassValidator } from './pipe/class-validator';

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

  @Post('/create')
  async createUser(
    @Body(new ClassValidator()) userDto: UserDto,
  ): Promise<IUser> {
    return await this.userService.addUser(userDto);
  }

  @Delete('/:email')
  deleteUser(@Param() params: UserParamDto): IUser[] {
    return this.userService.deleteUser(params.email);
  }
}
