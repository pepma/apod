import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonComponentsModule } from '../../common/common-component.module';
import { ApodListComponent } from './components/apod-list/apod-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonComponentsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [ApodListComponent],
  exports: [ApodListComponent],
})
export class ApodListModule {}
