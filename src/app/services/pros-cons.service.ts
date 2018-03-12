import { Injectable } from '@angular/core';
import { ProsCons } from '../models/pros-cons';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProsConsService {

  prosesConses: ProsCons[] = [
    {
      title: 'First line',
      description: 'I\'m the first line'
    },
    {
      title: 'Second line',
      description: 'I\'m the second line'
    }
  ];
  prosCons$ =  new BehaviorSubject(this.prosesConses);

  constructor() { }

  addProsCons(data: ProsCons): void {
    this.prosesConses.push(data);
    this.prosCons$.next(this.prosesConses);
  }

  editProsCons(data: ProsCons, i: number): void {
    this.prosesConses[i] = data;
    this.prosCons$.next(this.prosesConses);
  }

  removeProsCons(i: number): void {
    this.prosesConses.splice(i, 1);
    this.prosCons$.next(this.prosesConses);
  }
}
