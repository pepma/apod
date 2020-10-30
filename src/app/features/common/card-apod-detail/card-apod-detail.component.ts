import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApodDTO } from '@facades/planetary';

@Component({
  selector: 'app-card-apod-detail',
  templateUrl: './card-apod-detail.component.html',
  styleUrls: ['./card-apod-detail.component.scss'],
})
export class CardApodDetailComponent {
  @Input() info: ApodDTO;
  @Output() select = new EventEmitter<ApodDTO>();

  clickDetail(): void {
    this.select.emit(this.info);
  }
}
