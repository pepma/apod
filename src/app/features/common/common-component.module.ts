import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CardApodDetailComponent } from './card-apod-detail/card-apod-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [CardApodDetailComponent, NotFoundComponent],
  exports: [CardApodDetailComponent],
})
export class CommonComponentsModule {}
