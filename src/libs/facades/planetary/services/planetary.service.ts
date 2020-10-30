import { Injectable } from '@angular/core';
import { eachDayOfInterval, format, subDays } from 'date-fns';
import { forkJoin, Observable } from 'rxjs';

import { PlanetaryApiService } from '../api/planetary-api.service';
import { ApodDTO } from '../model/planetary.model';

@Injectable({ providedIn: 'root' })
export class PlanetaryService {
  constructor(private planetaryApiService: PlanetaryApiService) {}

  private getDatesOfInterval(endDate: Date, numberOfDays: number): Date[] {
    const startDate = subDays(endDate, numberOfDays - 1);
    return eachDayOfInterval({ start: startDate, end: endDate }).sort((a: Date, b: Date) => b.getTime() - a.getTime());
  }

  getApodList(endDate: Date, numberOfDays: number): Observable<ApodDTO[]> {
    const apodDays = this.getDatesOfInterval(endDate, numberOfDays).map((date) => format(date, 'yyyy-MM-dd'));

    const obsApod = apodDays.map((day) => this.getApod(day));
    return forkJoin(obsApod);
  }

  getApod(day: string): Observable<ApodDTO> {
    return this.planetaryApiService.getApod(day);
  }
}
