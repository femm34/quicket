import { Test, TestingModule } from '@nestjs/testing';
import { SignInDetailsService } from './sign-in-details.service';

describe('SignInDetailsService', () => {
  let service: SignInDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignInDetailsService],
    }).compile();

    service = module.get<SignInDetailsService>(SignInDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
