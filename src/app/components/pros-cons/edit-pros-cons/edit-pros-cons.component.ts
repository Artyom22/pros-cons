import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProsConsService } from '../../../services/pros-cons.service';
import { ProsCons } from '../../../models/pros-cons';

@Component({
  selector: 'app-edit-pros-cons',
  templateUrl: './edit-pros-cons.component.html',
  styleUrls: ['./edit-pros-cons.component.scss']
})

export class EditProsConsComponent implements OnInit {

  @Input() currentProsCons: number;
  @Input() data: ProsCons;
  @Output() editCanceled = new EventEmitter();

  title: string;
  description: string;

  constructor(private prosConsService: ProsConsService) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
  }

  editProsCons(): void {
    const data = {
      title: this.title,
      description: this.description,
    };
    this.prosConsService.editProsCons(data, this.currentProsCons);
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.editCanceled.emit('');
  }
}
