import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeTicketDto } from './create-type-ticket.dto';

export class UpdateTypeTicketDto extends PartialType(CreateTypeTicketDto) {}
