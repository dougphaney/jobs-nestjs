import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueProgress,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user-dto';

@Processor('sendMail-queue')
class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job;
    console.log(data); //remove this row

    await this.mailService.sendMail({
      to: data.email,
      from: 'dougphaney team',
      subject: 'welcome',
      text: `Hello ${data.name}, welcome to this group!`,
    });
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    console.log(`Completed ${job.name}`);
  }

  @OnQueueProgress()
  onQueueProgress(job: Job) {
    console.log(`Progress ${job.name}`);
  }

  @OnQueueActive()
  onQueueActive(job: Job) {
    console.log(`Active ${job.name}`);
  }
}

export { SendMailConsumer };
