import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor() {}

  @Get()
  getHelloUser(): string {
    return 'Hello';
  }

  @Post()
  postHelloUser(): string {
    return 'Hello';
  }
}
