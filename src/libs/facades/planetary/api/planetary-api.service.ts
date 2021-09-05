import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apod, PlanetaryConfig } from '../model/planetary.model';
import { PLANETARY_CONFIG_TOKEN } from '../planetary.token';
import { ApodDTOAdapter } from './adapter/adapters/apod-dto.adapter';


@Injectable({ providedIn: 'root' })
export class PlanetaryApiService {
    constructor(
      private httpClient: HttpClient,
      @Inject(PLANETARY_CONFIG_TOKEN) private config: PlanetaryConfig,
      private apodDTOAdapter: ApodDTOAdapter
    ) {}

  getApod(day: string): Observable<Apod> {
    return this.httpClient
      .get(`${this.config.urlApod}?api_key=${this.config.apiKey}&date=${day}`)
      .pipe(map(this.apodDTOAdapter.adapt));
  }
}
