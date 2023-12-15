import { Test, TestingModule } from '@nestjs/testing';
import { SummariseController } from './summarise.controller';

describe('SummariseController', () => {
  let controller: SummariseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummariseController],
    }).compile();

    controller = module.get<SummariseController>(SummariseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
