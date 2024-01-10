import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanceledTicketsService } from './canceled_tickets.service';
import { CreateCanceledTicketDto } from './dto/create-canceled_ticket.dto';
import { UpdateCanceledTicketDto } from './dto/update-canceled_ticket.dto';

@Controller('canceled-tickets')
export class CanceledTicketsController {
  constructor(private readonly canceledTicketsService: CanceledTicketsService) {}

  @Post()
  create(@Body() createCanceledTicketDto: CreateCanceledTicketDto) {
    return this.canceledTicketsService.create(createCanceledTicketDto);
  }

  @Get()
  findAll() {
    return this.canceledTicketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canceledTicketsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanceledTicketDto: UpdateCanceledTicketDto) {
    return this.canceledTicketsService.update(+id, updateCanceledTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canceledTicketsService.remove(+id);
  }
}
