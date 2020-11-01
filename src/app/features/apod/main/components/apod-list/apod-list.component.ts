import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApodDTO } from '@facades/planetary';

@Component({
  selector: 'app-apod-list',
  templateUrl: './apod-list.component.html',
  styleUrls: ['./apod-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodListComponent {
  @Input() list: ApodDTO[];
  @Output() select = new EventEmitter<ApodDTO>();

  onSelectApod(item: ApodDTO): void {
    this.select.emit(item);
  }
}
