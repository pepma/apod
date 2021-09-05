import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environments/environment';
import { PLANETARY_CONFIG_TOKEN } from '@facades/planetary';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './features/common/common-component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: PLANETARY_CONFIG_TOKEN,
      useValue: { urlApod: environment.URL_APOD, apiKey: environment.NASA_API_KEY },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
