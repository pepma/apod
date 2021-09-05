import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Apod } from '@facades/planetary';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApodAddDialogComponent } from '../components/apod-add-dialog/apod-add-dialog.component';

@Injectable()
export class DialogAddService {
  private _beforeClose = new Subject<Apod>();

  beforeClose(): Observable<Apod> {
    return this._beforeClose.asObservable();
  }

  private dialogRef: MatDialogRef<ApodAddDialogComponent, unknown>;

  constructor(private matDialog: MatDialog) {}

  open(detail: Apod): void {
    this.dialogRef = this.matDialog.open(ApodAddDialogComponent, {
      data: detail,
      width: '50vw',
    });
    this.dialogRef.componentInstance.add.pipe(tap((info) => this._beforeClose.next(info))).subscribe();
    this.dialogRef.componentInstance.cancel.pipe(tap(() => this.close())).subscribe();
  }

  close(): void {
    this.dialogRef.close();
    this.dialogRef = null;
  }
}
