import { Injectable } from '@nestjs/common';
import { CreateSignInDetailDto } from './dto/create-sign-in-detail.dto';
import { UpdateSignInDetailDto } from './dto/update-sign-in-detail.dto';

@Injectable()
export class SignInDetailsService {
  create(createSignInDetailDto: CreateSignInDetailDto) {
    return 'This action adds a new signInDetail';
  }

  findAll() {
    return `This action returns all signInDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signInDetail`;
  }

  update(id: number, updateSignInDetailDto: UpdateSignInDetailDto) {
    return `This action updates a #${id} signInDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} signInDetail`;
  }
}
