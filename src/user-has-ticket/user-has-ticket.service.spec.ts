import { Test, TestingModule } from '@nestjs/testing';
import { UserHasTicketService } from './user-has-ticket.service';

describe('UserHasTicketService', () => {
  let service: UserHasTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHasTicketService],
    }).compile();

    service = module.get<UserHasTicketService>(UserHasTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
