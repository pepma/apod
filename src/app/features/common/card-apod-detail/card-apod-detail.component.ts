import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ApodDTO } from '@facades/planetary';

import { TypeCarApodDetail } from './model/cad-apod-detail.model';

@Component({
  selector: 'app-card-apod-detail',
  templateUrl: './card-apod-detail.component.html',
  styleUrls: ['./card-apod-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardApodDetailComponent {
  @Input() info: ApodDTO;
  @Input() mode: TypeCarApodDetail = TypeCarApodDetail.PREVIEW;
  @Output() select = new EventEmitter<ApodDTO>();


  get isPreviewMode(): boolean {
    return this.mode === TypeCarApodDetail.PREVIEW;
  }

  clickDetail(): void {
    this.select.emit(this.info);
  }
}
