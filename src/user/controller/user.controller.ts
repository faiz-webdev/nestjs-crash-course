import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Response } from 'express';
import { CreateUserDTO, UserParamDTO } from '../dto/user.dto';

// REQUEST VLIDATION

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}
  // /hello HTTP GET

  @Get()
  async getAllUsers(@Res() res: Response) {
    try {
      const data = await this.service.listUser();
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get('/:userId')
  async getUserById(@Param() param: UserParamDTO) {
    const data = await this.service.getUser(param.userId);
    return data;
    // res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async createUsers(
    @Res() res: Response,
    @Body() customerParam: CreateUserDTO,
  ) {
    try {
      const data = await this.service.createUser(customerParam);
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Delete('/')
  async deleteUserById(@Query('customerid') id: string) {
    return await this.service.getUser(id);
  }

  // @Put('/')
  // async updateCustomerById(
  //   @Res() res: Response,
  //   @Body() customerParam: Partial<CreateUserDTO>,
  //   @Query('customerid') id: string,
  // ) {
  //   const data = await this.service.updateCustomer(id, customerParam);
  //   res.status(HttpStatus.OK).json(data);
  // }
}
