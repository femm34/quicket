import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHasTicketDto } from './create-user-has-ticket.dto';

export class UpdateUserHasTicketDto extends PartialType(CreateUserHasTicketDto) {}
