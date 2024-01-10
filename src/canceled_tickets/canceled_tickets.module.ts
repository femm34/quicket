import { Module } from '@nestjs/common';
import { CanceledTicketsService } from './canceled_tickets.service';
import { CanceledTicketsController } from './canceled_tickets.controller';

@Module({
  controllers: [CanceledTicketsController],
  providers: [CanceledTicketsService],
})
export class CanceledTicketsModule {}
