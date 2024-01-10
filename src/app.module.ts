import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanceledTicketsModule } from './canceled_tickets/canceled_tickets.module';
import { EventsModule } from './events/events.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { SignInDetailsModule } from './sign-in-details/sign-in-details.module';
import { TicketModule } from './ticket/ticket.module';
import { TypeTicketModule } from './type-ticket/type-ticket.module';
import { TypeEventModule } from './type_event/type_event.module';
import { UserHasTicketModule } from './user-has-ticket/user-has-ticket.module';

@Module({
  imports: [
    
    TicketModule,
    EventsModule,
    CanceledTicketsModule,
    TypeEventModule,
    FeedbacksModule,
    UserHasTicketModule,
    SignInDetailsModule,
    TypeTicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
