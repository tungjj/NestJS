import { WordsRepository } from './words.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [TypeOrmModule.forFeature([WordsRepository])],
})
export class WordsModule {}