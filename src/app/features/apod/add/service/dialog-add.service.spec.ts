import { waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Apod } from '@facades/planetary';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Observable, Subject } from 'rxjs';
import { DialogAddService } from './dialog-add.service';

class MatDialogRefMock {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close(): void {}
  componentInstance = new ComponentInstanceMock();
}

class ComponentInstanceMock {
  _add = new Subject();
  _cancel = new Subject();
  setAdd(item: Apod): void {
    this._add.next(item);
  }
  setCancel(): void {
    this._cancel.next();
  }
  get add(): Observable<Apod> {
    return this._add.asObservable();
  }
  get cancel(): Observable<unknown> {
    return this._cancel.asObservable();
  }
}
describe('DialogAddService', () => {
  let spectator: SpectatorService<DialogAddService>;
  const createService = createServiceFactory({
    service: DialogAddService,
    mocks: [MatDialog],
  });

  beforeEach(() => (spectator = createService()));

  it('should exists', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should close dialog', () => {
    const dialogRef = new MatDialogRefMock();
    const matDialog = spectator.inject(MatDialog);
    matDialog.open.andReturn(dialogRef);
    const spyClose = spyOn(dialogRef, 'close');
    spectator.service.open({});
    spectator.service.close();

    expect(spyClose).toHaveBeenCalledTimes(1);
  });

  it(
    'should call before close dialog',
    waitForAsync(() => {
      const dialogRef = new MatDialogRefMock();

      spectator.service.beforeClose().subscribe((data) => {
        expect(data).toEqual({});
      });
      const matDialog = spectator.inject(MatDialog);
      matDialog.open.andReturn(dialogRef);

      spectator.service.open({});
      dialogRef.componentInstance.setAdd({});
    })
  );

  it(
    'should close dialog when cancel',
    waitForAsync(() => {
      const dialogRef = new MatDialogRefMock();

      spectator.service.beforeClose().subscribe((data) => {
        expect(data).toEqual({});
      });
      const matDialog = spectator.inject(MatDialog);
      matDialog.open.andReturn(dialogRef);
      const spyClose = spyOn(dialogRef, 'close');
      spectator.service.open({});
      dialogRef.componentInstance.setCancel();
      expect(spyClose).toHaveBeenCalledTimes(1);
    })
  );
});
