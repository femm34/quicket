import { PartialType } from '@nestjs/mapped-types';
import { CreateSignInDetailDto } from './create-sign-in-detail.dto';

export class UpdateSignInDetailDto extends PartialType(CreateSignInDetailDto) {}
