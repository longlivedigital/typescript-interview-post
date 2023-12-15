import { Module } from '@nestjs/common';
import { SummariseController } from './summarise.controller';
import { SummariseService } from './summarise.service';

@Module({
  controllers: [SummariseController],
  providers: [SummariseService]
})
export class SummariseModule {}
