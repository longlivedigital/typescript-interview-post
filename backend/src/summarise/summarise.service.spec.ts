import { Test, TestingModule } from '@nestjs/testing';
import { SummariseService } from './summarise.service';

describe('SummariseService', () => {
  let service: SummariseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummariseService],
    }).compile();

    service = module.get<SummariseService>(SummariseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
