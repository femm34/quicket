import { Module } from '@nestjs/common';
import { SignInDetailsService } from './sign-in-details.service';
import { SignInDetailsController } from './sign-in-details.controller';

@Module({
  controllers: [SignInDetailsController],
  providers: [SignInDetailsService],
})
export class SignInDetailsModule {}
