import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApodDTO } from '../model/planetary.model';

@Injectable({ providedIn: 'root' })
export class PlanetaryStateService {
  private bsList$ = new BehaviorSubject<ApodDTO[]>([]);

  get list$(): Observable<ApodDTO[]> {
    return this.bsList$.asObservable();
  }
  get list(): ApodDTO[] {
    return this.bsList$.getValue();
  }

  setApodList(data: ApodDTO[]): void {
    this.bsList$.next(data);
  }
}
