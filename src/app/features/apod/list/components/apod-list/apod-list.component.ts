import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Apod } from '@facades/planetary';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
})
export class ApodListComponent {
  @Input() list: Apod[];

  @Output() selectDetail = new EventEmitter<Apod>();
  @Output() removeApod = new EventEmitter<Apod>();

  onSelectApod(item: Apod): void {
    this.selectDetail.emit(item);
  }

  onRemoveApod(item: Apod): void {
    this.removeApod.emit(item);
  }
}
