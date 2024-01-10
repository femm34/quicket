import { Injectable } from '@nestjs/common';
import { CreateTypeTicketDto } from './dto/create-type-ticket.dto';
import { UpdateTypeTicketDto } from './dto/update-type-ticket.dto';

@Injectable()
export class TypeTicketService {
  create(createTypeTicketDto: CreateTypeTicketDto) {
    return 'This action adds a new typeTicket';
  }

  findAll() {
    return `This action returns all typeTicket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeTicket`;
  }

  update(id: number, updateTypeTicketDto: UpdateTypeTicketDto) {
    return `This action updates a #${id} typeTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeTicket`;
  }
}
