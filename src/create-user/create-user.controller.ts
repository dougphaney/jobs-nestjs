import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto';
import { SendMailProducerService } from 'src/jobs/sendMail-producer-service';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailSerice: SendMailProducerService) {}

  @Post('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createUser(@Body() createUser: CreateUserDTO) {
    this.sendMailSerice.sendMail(createUser);
    return createUser;
  }
}
