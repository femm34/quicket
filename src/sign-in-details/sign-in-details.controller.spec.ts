import { Test, TestingModule } from '@nestjs/testing';
import { SignInDetailsController } from './sign-in-details.controller';
import { SignInDetailsService } from './sign-in-details.service';

describe('SignInDetailsController', () => {
  let controller: SignInDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignInDetailsController],
      providers: [SignInDetailsService],
    }).compile();

    controller = module.get<SignInDetailsController>(SignInDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
