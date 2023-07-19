import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Response } from 'express';

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
}
