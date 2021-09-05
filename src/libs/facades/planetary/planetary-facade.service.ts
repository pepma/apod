import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Apod } from './model/planetary.model';
import { PlanetaryService } from './services/planetary.service';
import { PlanetaryStateService } from './state/planetary-state.service';
@Injectable({ providedIn: 'root' })
export class PlanetaryFacadeService {

  private sortByName = (a: Apod, b: Apod) => {
    const nameA = a.date;
    const nameB = b.date;
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  };

  get list$(): Observable<Apod[]> {
    return this.planetaryStateService.list$.pipe(map((m) => m.sort(this.sortByName)));
  }

  get hasItems(): boolean {
    return this.planetaryStateService.hasItems;
  }

  constructor(private planetaryService: PlanetaryService, private planetaryStateService: PlanetaryStateService) {}

  getAll(endDate: Date, numberOfDays: number): void {
    this.planetaryService
      .getApodList(endDate, numberOfDays)
      .pipe(tap((list) => this.planetaryStateService.setApodList(list)))
      .subscribe();
  }

  add(info: Apod): void {
    this.planetaryStateService.addApod(info);
  }

  remove(info: Apod): void {
    this.planetaryStateService.removeApod(info);
  }
}
