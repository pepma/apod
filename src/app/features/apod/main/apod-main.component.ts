import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { ApodDTO, PlanetaryFacadeService } from '@facades/planetary';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apod-main',
  templateUrl: './apod-main.component.html',
  styleUrls: ['./apod-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodMainComponent implements OnInit {
  list$: Observable<ApodDTO[]>;
  daysToShow: number;
  constructor(private planetaryFacadeService: PlanetaryFacadeService, private router: Router) {
    this.daysToShow = environment.DEFAULT_DAYS_TO_SHOW;
  }

  ngOnInit(): void {
    this.list$ = this.planetaryFacadeService.list$;
    if (!this.planetaryFacadeService.hasItems) {
      this.planetaryFacadeService.getAll(new Date(), environment.DEFAULT_DAYS_TO_SHOW);
    }
  }

  onSelectApod(item: ApodDTO): void {
    this.router.navigate([`apod/${item.date}`]);
  }
}
