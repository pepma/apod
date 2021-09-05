import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apod, ApodTypeEnum, PlanetaryFacadeService } from '@facades/planetary';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apod-detail',
  templateUrl: './apod-detail.component.html',
  styleUrls: ['./apod-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApodDetailComponent implements OnInit {
  item$: Observable<Apod>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private planetaryFacadeService: PlanetaryFacadeService
  ) {}

  clickBack(): void {
    this.router.navigate(['/apod']);
  }

  ngOnInit(): void {
    const dateApod = this.activatedRoute.snapshot.paramMap.get('date');
    const type = this.activatedRoute.snapshot.paramMap.get('type') as ApodTypeEnum;
    this.item$ = this.planetaryFacadeService.list$.pipe(map((list) => list.find((item) => item.date === dateApod && item.type === type)));
  }
}
