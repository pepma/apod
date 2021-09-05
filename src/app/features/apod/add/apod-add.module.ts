import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonComponentsModule } from '@features/common/common-component.module';
import { ApodAddDialogComponent } from './components/apod-add-dialog/apod-add-dialog.component';
import { DialogAddService } from './service/dialog-add.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    CommonComponentsModule,
  ],
  providers: [DialogAddService],
  declarations: [ ApodAddDialogComponent],
  exports: [ApodAddDialogComponent],
})
export class ApodAddModule {}
