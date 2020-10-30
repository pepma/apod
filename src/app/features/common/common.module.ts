import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CardApodDetailComponent } from './card-apod-detail/card-apod-detail.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [CardApodDetailComponent],
  exports: [CardApodDetailComponent, MatCardModule, MatButtonModule],
})
export class CommonComponentsModule {}
