import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import config from './config/config';
import { join } from 'path';
import { CanceledTicketsModule } from './canceled_tickets/canceled_tickets.module';
import { EventsModule } from './events/events.module';
import { SignInDetailsModule } from './sign-in-details/sign-in-details.module';
import { TicketModule } from './ticket/ticket.module';
import { TypeEvent } from './type_event/entities/type_event.entity';
import { TypeEventModule } from './type_event/type_event.module';
import { TypeTicketModule } from './type-ticket/type-ticket.module';
// import { UserHasTicketModule } from './user-has-ticket/user-has-ticket.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config().dbHost,
      port: parseInt(config().dbPort),
      username: config().databaseUsername,
      password: config().databasePassword,
      database: config().dbName,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    CanceledTicketsModule,
    EventsModule,
    FeedbacksModule,
    SignInDetailsModule,
    TicketModule,
    TypeEventModule,
    TypeTicketModule,
    // UserHasTicketModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
