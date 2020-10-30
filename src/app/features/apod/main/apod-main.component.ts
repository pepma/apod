import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { ApodDTO, PlanetaryFacadeService } from '@facades/planetary';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apod-main',
  templateUrl: './apod-main.component.html',
})
export class ApodMainComponent implements OnInit {
  list$: Observable<ApodDTO[]>;

  constructor(private planetaryFacadeService: PlanetaryFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.list$ = this.planetaryFacadeService.list$;
    this.planetaryFacadeService.getAll(new Date(), environment.DEFAULT_DAYS_TO_SHOW);
  }

  onSelectApod(item: ApodDTO): void {
    this.router.navigate([`/detail/${item.date}`]);
  }
}
