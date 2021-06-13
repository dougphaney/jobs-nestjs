import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  @Post('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUser(@Body() createUser: CreateUserDTO) {
    return createUser;
  }
}
