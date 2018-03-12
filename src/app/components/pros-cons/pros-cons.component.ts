import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProsConsService } from '../../services/pros-cons.service';
import { ProsCons } from '../../models/pros-cons';
import { keyframes, query, stagger, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-pros-cons',
  templateUrl: './pros-cons.component.html',
  styleUrls: ['./pros-cons.component.scss'],
  animations: [
    trigger('prosConsAnimate', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ],
  providers: [ ProsConsService ]
})

export class ProsConsComponent implements OnInit, OnDestroy {

  @Input() type: string;

  prosesConses: ProsCons[];
  currentProsCons: number;
  edit = false;

  constructor(private prosConsService: ProsConsService) { }

  ngOnInit(): void {
    this.prosConsService.prosCons$.subscribe((prosesConses: ProsCons[] | null) => {
      this.prosesConses = prosesConses;
    });
  }

  editProsCons(i: number): void {
    this.currentProsCons = i;
    this.OnOffEdit();
  }

  OnOffEdit(): void {
    this.edit = !this.edit;
  }

  removeProsCons(i: number): void {
    this.prosConsService.removeProsCons(i);
  }

  ngOnDestroy(): void {
    this.prosConsService.prosCons$.unsubscribe();
  }
}
