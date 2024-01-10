import { Injectable } from '@nestjs/common';
import { CreateCanceledTicketDto } from './dto/create-canceled_ticket.dto';
import { UpdateCanceledTicketDto } from './dto/update-canceled_ticket.dto';

@Injectable()
export class CanceledTicketsService {
  create(createCanceledTicketDto: CreateCanceledTicketDto) {
    return 'This action adds a new canceledTicket';
  }

  findAll() {
    return `This action returns all canceledTickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} canceledTicket`;
  }

  update(id: number, updateCanceledTicketDto: UpdateCanceledTicketDto) {
    return `This action updates a #${id} canceledTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} canceledTicket`;
  }
}
