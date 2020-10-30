import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetaryFacadeService } from '@facades/planetary';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/mock-property';
import { MockComponents, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ApodMainComponent } from './apod-main.component';
import { ApodListComponent } from './components/apod-list/apod-list.component';

describe('ApodMainComponent', () => {
  let component: ApodMainComponent;
  let fixture: ComponentFixture<ApodMainComponent>;
  let planetaryFacadeService: PlanetaryFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodMainComponent],
      providers: [MockProvider(PlanetaryFacadeService), MockComponents(ApodListComponent)],
      imports: [RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodMainComponent);
    component = fixture.componentInstance;
    planetaryFacadeService = TestBed.inject(PlanetaryFacadeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list', () => {
    spyOn(planetaryFacadeService, 'getAll');
    mockProperty(planetaryFacadeService, 'list$', of([]));
    fixture.detectChanges();
    const observerSpy = subscribeSpyTo(component.list$);
    expect(observerSpy.getLastValue()).toEqual([]);
  });

  it('should select apod', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
    component.onSelectApod({ date: '2020-10-20' });
    expect(router.navigate).toHaveBeenCalledWith(['/detail/2020-10-20']);
  });
});
