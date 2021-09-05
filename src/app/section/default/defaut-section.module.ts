import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApodAddModule } from '@features/apod/add';
import { ApodDetailModule } from '@features/apod/detail/apod-detail.module';
import { ApodListModule } from '@features/apod/list/apod-list.module';
import { CommonComponentsModule } from '@features/common/common-component.module';
import { ApodHeaderComponent } from './components/apod-header/apod-header.component';
import { ApodMainComponent } from './container/apod-main.component';
import { DefaultSectionRoutingModule } from './default-section-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DefaultSectionRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    CommonComponentsModule,
    ApodAddModule,
    ApodListModule,
    ApodDetailModule
  ],
  declarations: [ApodMainComponent, ApodHeaderComponent],
  exports: [ApodMainComponent],
})
export class DefaultSectionModule {}
