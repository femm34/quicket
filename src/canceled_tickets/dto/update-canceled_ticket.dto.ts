import { PartialType } from '@nestjs/mapped-types';
import { CreateCanceledTicketDto } from './create-canceled_ticket.dto';

export class UpdateCanceledTicketDto extends PartialType(CreateCanceledTicketDto) {}
