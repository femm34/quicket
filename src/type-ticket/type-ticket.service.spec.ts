import { Test, TestingModule } from '@nestjs/testing';
import { TypeTicketService } from './type-ticket.service';

describe('TypeTicketService', () => {
  let service: TypeTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeTicketService],
    }).compile();

    service = module.get<TypeTicketService>(TypeTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
