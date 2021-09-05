import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { Apod, ApodDTO, PlanetaryFacadeService } from '@facades/planetary';
import { DialogAddService } from '@features/apod/add';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-apod-main',
  templateUrl: './apod-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodMainComponent implements OnInit {
  list$: Observable<ApodDTO[]>;
  daysToShow: number;
  constructor(
    private planetaryFacadeService: PlanetaryFacadeService,
    private router: Router,
    private dialogAddService: DialogAddService
  ) {
    this.daysToShow = environment.DEFAULT_DAYS_TO_SHOW;
  }

  ngOnInit(): void {
    this.list$ = this.planetaryFacadeService.list$;
    this.dialogAddService
      .beforeClose()
      .pipe(
        untilDestroyed(this),
        tap((info) => {
          this.planetaryFacadeService.add(info);
          this.dialogAddService.close();
        })
      )
      .subscribe();
  }

  onSelectApod(item: Apod): void {
    this.router.navigate([`apod/${item.date}/${item.type}`]);
  }

  onRemoveApod(item: Apod): void {
    this.planetaryFacadeService.remove(item);
  }

  onCreateCustomApod(): void {
    this.dialogAddService.open({});
  }
}
