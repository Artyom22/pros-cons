import { Component } from '@angular/core';
import { ProsConsService } from '../../../services/pros-cons.service';

@Component({
  selector: 'app-add-pros-cons',
  templateUrl: './add-pros-cons.component.html',
  styleUrls: ['./add-pros-cons.component.scss']
})

export class AddProsConsComponent {

  title: string;
  description: string;

  constructor(private prosConsService: ProsConsService) { }

  addProsCons(): void {
    const data = {
      title: this.title,
      description: this.description,
    };
    this.prosConsService.addProsCons(data);
  }
}
