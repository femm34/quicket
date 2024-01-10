import { Injectable } from '@nestjs/common';
import { CreateUserHasTicketDto } from './dto/create-user-has-ticket.dto';
import { UpdateUserHasTicketDto } from './dto/update-user-has-ticket.dto';

@Injectable()
export class UserHasTicketService {
  create(createUserHasTicketDto: CreateUserHasTicketDto) {
    return 'This action adds a new userHasTicket';
  }

  findAll() {
    return `This action returns all userHasTicket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHasTicket`;
  }

  update(id: number, updateUserHasTicketDto: UpdateUserHasTicketDto) {
    return `This action updates a #${id} userHasTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHasTicket`;
  }
}
