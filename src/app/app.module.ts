import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { PLANETARY_CONFIG_TOKEN } from '@facades/planetary';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './features/common/common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonComponentsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: PLANETARY_CONFIG_TOKEN,
      useValue: { urlApod: environment.URL_APOD, apiKey: environment.NASA_API_KEY },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
