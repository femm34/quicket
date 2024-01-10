import { Test, TestingModule } from '@nestjs/testing';
import { CanceledTicketsController } from './canceled_tickets.controller';
import { CanceledTicketsService } from './canceled_tickets.service';

describe('CanceledTicketsController', () => {
  let controller: CanceledTicketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanceledTicketsController],
      providers: [CanceledTicketsService],
    }).compile();

    controller = module.get<CanceledTicketsController>(CanceledTicketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
