import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApodDTO } from './model/planetary.model';
import { PlanetaryService } from './services/planetary.service';
import { PlanetaryStateService } from './state/planetary-state.service';

@Injectable({ providedIn: 'root' })
export class PlanetaryFacadeService {
  get list$(): Observable<ApodDTO[]> {
    return this.planetaryStateService.list$;
  }

  get hasItems(): boolean {
    return !!this.planetaryStateService.list.length;
  }

  constructor(private planetaryService: PlanetaryService, private planetaryStateService: PlanetaryStateService) {}

  getAll(endDate: Date, numberOfDays: number): void {
    this.planetaryService
      .getApodList(endDate, numberOfDays)
      .pipe(tap((list) => this.planetaryStateService.setApodList(list)))
      .subscribe();
  }
}
