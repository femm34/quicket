import { Module } from '@nestjs/common';
import { UserHasTicketService } from './user-has-ticket.service';
import { UserHasTicketController } from './user-has-ticket.controller';

@Module({
  controllers: [UserHasTicketController],
  providers: [UserHasTicketService],
})
export class UserHasTicketModule {}
