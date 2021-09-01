import { Component, EventEmitter } from '@angular/core';
import { ApodDTO } from '@facades/planetary';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
})
export class ApodListComponent {
  list: ApodDTO[];
  select = new EventEmitter<ApodDTO>();

  onSelectApod(item: ApodDTO): void {
    this.select.emit(item);
  }
}
