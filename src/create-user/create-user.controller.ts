import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDTO } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private mailService: MailerService) {}
  @Post('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createUser(@Body() createUser: CreateUserDTO) {
    await this.mailService.sendMail({
      to: createUser.email,
      from: 'dougphaney team',
      subject: 'welcome!!',
      text: `Hello ${createUser.name}, welcome to join this group`,
    });
    return createUser;
  }
}
