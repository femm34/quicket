import { Test, TestingModule } from '@nestjs/testing';
import { TypeTicketController } from './type-ticket.controller';
import { TypeTicketService } from './type-ticket.service';

describe('TypeTicketController', () => {
  let controller: TypeTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeTicketController],
      providers: [TypeTicketService],
    }).compile();

    controller = module.get<TypeTicketController>(TypeTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
