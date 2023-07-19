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
import { CustomerService } from '../services/customer.service';
import { Response } from 'express';
import { CreateCustomerDTO } from '../dto/customer.dto';

// REQUEST VLIDATION

@Controller('customers')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}
  // /hello HTTP GET

  @Get()
  async getAllCustomers(@Res() res: Response) {
    try {
      const data = await this.service.listCustomer();
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get('/:customerId')
  async getCustomerById(@Res() res: Response, @Param('id') id: string) {
    const data = await this.service.getCustomer(id);
    res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async createCustomers(
    @Res() res: Response,
    @Body() customerParam: CreateCustomerDTO,
  ) {
    try {
      const data = await this.service.createCustomer(customerParam);
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Delete('/')
  async deleteCustomerById(@Query('customerid') id: string) {
    return await this.service.getCustomer(id);
  }

  @Put('/')
  async updateCustomerById(
    @Res() res: Response,
    @Body() customerParam: Partial<CreateCustomerDTO>,
    @Query('customerid') id: string,
  ) {
    const data = await this.service.updateCustomer(id, customerParam);
    res.status(HttpStatus.OK).json(data);
  }
}
