import { Test, TestingModule } from '@nestjs/testing';
import { CanceledTicketsService } from './canceled_tickets.service';

describe('CanceledTicketsService', () => {
  let service: CanceledTicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanceledTicketsService],
    }).compile();

    service = module.get<CanceledTicketsService>(CanceledTicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
