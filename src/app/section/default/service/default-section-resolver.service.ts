import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { environment } from '@environments/environment';
import { PlanetaryFacadeService } from '@facades/planetary';
import { Observable, of } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DefaultSectionResolverService implements Resolve<boolean> {
  constructor(private planetaryFacadeService: PlanetaryFacadeService) {}
  resolve(): Observable<boolean> {
    let hasData$ = of(true);
    if (!this.planetaryFacadeService.hasItems) {
      this.planetaryFacadeService.getAll(new Date(), environment.DEFAULT_DAYS_TO_SHOW);

      hasData$ = this.planetaryFacadeService.list$.pipe(
        filter((f) => !!f),
        take(1),
        mapTo(true)
      );
    }

    return hasData$;
  }
}
