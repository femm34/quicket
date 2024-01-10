import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHasTicketService } from './user-has-ticket.service';
import { CreateUserHasTicketDto } from './dto/create-user-has-ticket.dto';
import { UpdateUserHasTicketDto } from './dto/update-user-has-ticket.dto';

@Controller('user-has-ticket')
export class UserHasTicketController {
  constructor(private readonly userHasTicketService: UserHasTicketService) {}

  @Post()
  create(@Body() createUserHasTicketDto: CreateUserHasTicketDto) {
    return this.userHasTicketService.create(createUserHasTicketDto);
  }

  @Get()
  findAll() {
    return this.userHasTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHasTicketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserHasTicketDto: UpdateUserHasTicketDto) {
    return this.userHasTicketService.update(+id, updateUserHasTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHasTicketService.remove(+id);
  }
}
