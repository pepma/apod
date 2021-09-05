import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Apod, ApodTypeEnum } from '@facades/planetary';
import { TypeCarApodDetail } from './model/cad-apod-detail.model';

@Component({
  selector: 'app-card-apod-detail',
  templateUrl: './card-apod-detail.component.html',
  styleUrls: ['./card-apod-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardApodDetailComponent {
  @Input() info!: Apod;
  @Input() mode: TypeCarApodDetail = TypeCarApodDetail.PREVIEW;

  @Output() selectDetail = new EventEmitter<Apod>();
  @Output() removeApod = new EventEmitter<Apod>();

  get isPreviewMode(): boolean {
    return this.mode === TypeCarApodDetail.PREVIEW;
  }

  get isTypeUser(): boolean {
    return this.info.type !== ApodTypeEnum.NASA;
  }

  get videoUrl(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.info.url);
  }

  get isImage(): boolean {
    return this.info.mediaType == 'image';
  }

  constructor(private domSanitizer: DomSanitizer) {}

  clickDetail(): void {
    this.selectDetail.emit(this.info);
  }

  clickRemove(): void {
    this.removeApod.emit(this.info);
  }
}
