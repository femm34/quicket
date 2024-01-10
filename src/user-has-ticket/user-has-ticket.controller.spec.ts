import { Test, TestingModule } from '@nestjs/testing';
import { UserHasTicketController } from './user-has-ticket.controller';
import { UserHasTicketService } from './user-has-ticket.service';

describe('UserHasTicketController', () => {
  let controller: UserHasTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHasTicketController],
      providers: [UserHasTicketService],
    }).compile();

    controller = module.get<UserHasTicketController>(UserHasTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
