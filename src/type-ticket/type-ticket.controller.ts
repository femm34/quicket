import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeTicketService } from './type-ticket.service';
import { CreateTypeTicketDto } from './dto/create-type-ticket.dto';
import { UpdateTypeTicketDto } from './dto/update-type-ticket.dto';

@Controller('type-ticket')
export class TypeTicketController {
  constructor(private readonly typeTicketService: TypeTicketService) {}

  @Post()
  create(@Body() createTypeTicketDto: CreateTypeTicketDto) {
    return this.typeTicketService.create(createTypeTicketDto);
  }

  @Get()
  findAll() {
    return this.typeTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeTicketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeTicketDto: UpdateTypeTicketDto) {
    return this.typeTicketService.update(+id, updateTypeTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeTicketService.remove(+id);
  }
}
