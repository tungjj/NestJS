import { Learnedword } from './../../learnedwords/entities/learnedword.entity';
import { Lesson } from './../../lessons/entities/lesson.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
export enum WordType {
  'Noun' = 'Noun',
  'Verb' = 'Verb',
  'Adjective' = 'Ajective',
  'Adverb' = 'Adverb',
}
@Entity({ name: 'word'})
export class Word extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  word: string;

  @Column('text')
  meaning: string;

  @Column({
    type: 'enum',
    enum: WordType,
  })
  type: WordType;

  @Column('text')
  example: string;

  @Column('text')
  pronunciation: string;

  @Column('text')
  linkImage: string;

  @Column('text')
  linkAudio: string;

  @Column('int')
  numberCharacter: number;

  @Column('text')
  placeholder: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.word)
  lesson: Lesson;
  @OneToMany(()=> Learnedword, (learnedword) => learnedword.word)
  learnedword: Learnedword[];
}
