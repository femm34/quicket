import { Module } from '@nestjs/common';
import { TypeTicketService } from './type-ticket.service';
import { TypeTicketController } from './type-ticket.controller';

@Module({
  controllers: [TypeTicketController],
  providers: [TypeTicketService],
})
export class TypeTicketModule {}
