import { Injectable } from '@nestjs/common';

export type SupermemoItem = {
  interval: number;
  repetition: number;
  efactor: number;
};
function supermemo(item: SupermemoItem, grade: number)
{

}

@Injectable()
export class SupermemoService {
  supermemo(item: SupermemoItem, grade: number) {
    let nextInterval;
    let nextRepetition;
    let nextEfactor;

    if (grade >= 3) {
      if (item.repetition === 0) {
        nextInterval = 1;
        nextRepetition = 1;
      } else if (item.repetition === 1) {
        nextInterval = 6;
        nextRepetition = 2;
      } else {
        nextInterval = Math.round(item.interval * item.efactor);
        nextRepetition = item.repetition + 1;
      }
    } else {
      nextInterval = 1;
      nextRepetition = 0;
    }

    nextEfactor =
      item.efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    if (nextEfactor < 1.3) nextEfactor = 1.3;
    return {
      interval: nextInterval,
      repetition: nextRepetition,
      efactor: nextEfactor,
    };
  }
}
