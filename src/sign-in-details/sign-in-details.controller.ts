import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignInDetailsService } from './sign-in-details.service';
import { CreateSignInDetailDto } from './dto/create-sign-in-detail.dto';
import { UpdateSignInDetailDto } from './dto/update-sign-in-detail.dto';

@Controller('sign-in-details')
export class SignInDetailsController {
  constructor(private readonly signInDetailsService: SignInDetailsService) {}

  @Post()
  create(@Body() createSignInDetailDto: CreateSignInDetailDto) {
    return this.signInDetailsService.create(createSignInDetailDto);
  }

  @Get()
  findAll() {
    return this.signInDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signInDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignInDetailDto: UpdateSignInDetailDto) {
    return this.signInDetailsService.update(+id, updateSignInDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signInDetailsService.remove(+id);
  }
}
