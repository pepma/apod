import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apod } from '@facades/planetary';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-apod-add-dialog',
  templateUrl: './apod-add-dialog.component.html',
  styleUrls: ['./apod-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodAddDialogComponent {
  _cancel = new Subject<void>();

  get cancel(): Observable<void> {
    return this._cancel.asObservable();
  }

  _add = new Subject<Apod>();

  get add(): Observable<Apod> {
    return this._add.asObservable();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: Apod) {}

  close(info: Apod): void {
    if (info) {
      this._add.next(info);
    } else {
      this._cancel.next();
    }
  }
}
