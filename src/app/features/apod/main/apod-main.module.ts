import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonComponentsModule } from '../../common/common.module';
import { ApodMainRoutingModule } from './apod-main-routing.module';
import { ApodMainComponent } from './apod-main.component';
import { ApodListComponent } from './components/apod-list/apod-list.component';

@NgModule({
  imports: [CommonModule, ApodMainRoutingModule, FlexLayoutModule, CommonComponentsModule],
  declarations: [ApodMainComponent, ApodListComponent],
  exports: [ApodMainComponent],
})
export class ApodMainModule {}
