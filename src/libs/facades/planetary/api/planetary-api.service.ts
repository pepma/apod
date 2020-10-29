import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApodDTO, PlanetaryConfig } from '../model/planetary.model';
import { PLANETARY_CONFIG_TOKEN } from '../planetary.token';

@Injectable({ providedIn: 'root' })
export class PlanetaryApiService {
  constructor(
    private httpClient: HttpClient,
    @Inject(PLANETARY_CONFIG_TOKEN) private config: PlanetaryConfig
  ) {}

  getApod(day: string): Observable<ApodDTO> {
    return this.httpClient.get(
      `${this.config.urlApod}?api_key=${this.config.apiKey}&date=${day}`
    );
  }
}
