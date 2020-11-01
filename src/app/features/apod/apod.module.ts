import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { CommonComponentsModule } from '../common/common-component.module';
import { ApodRoutingModule } from './apod-routing.module';
import { ApodDetailComponent } from './detail/apod-detail.component';
import { ApodMainComponent } from './main/apod-main.component';
import { ApodListComponent } from './main/components/apod-list/apod-list.component';

@NgModule({
  imports: [
    CommonModule,
    ApodRoutingModule,
    FlexLayoutModule,
    CommonComponentsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [ApodMainComponent, ApodListComponent, ApodDetailComponent],
  exports: [ApodMainComponent],
})
export class ApodModule {}
