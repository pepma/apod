import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonComponentsModule } from '../../common/common-component.module';
import { ApodDetailComponent } from './components/apod-detail/apod-detail.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CommonComponentsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,

  ],
  declarations: [ApodDetailComponent],
  exports: [ApodDetailComponent],
})
export class ApodDetailModule {}
