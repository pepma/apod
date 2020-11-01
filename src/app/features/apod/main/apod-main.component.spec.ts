import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetaryFacadeService } from '@facades/planetary';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/mock-property';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ApodMainComponent } from './apod-main.component';

describe('ApodMainComponent', () => {
  let component: ApodMainComponent;
  let fixture: ComponentFixture<ApodMainComponent>;
  let planetaryFacadeService: PlanetaryFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodMainComponent],
      providers: [MockProvider(PlanetaryFacadeService)],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    mockProperty(planetaryFacadeService, 'hasItems', true);
    fixture.detectChanges();
    const observerSpy = subscribeSpyTo(component.list$);
    expect(observerSpy.getLastValue()).toEqual([]);
    expect(planetaryFacadeService.getAll).not.toHaveBeenCalled();
  });

  it('should call to facade when not has items', () => {
    spyOn(planetaryFacadeService, 'getAll');
    mockProperty(planetaryFacadeService, 'list$', of([]));
    mockProperty(planetaryFacadeService, 'hasItems', false);
    fixture.detectChanges();
    expect(planetaryFacadeService.getAll).toHaveBeenCalled();
  });

  it('should select apod', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
    component.onSelectApod({ date: '2020-10-20' });
    expect(router.navigate).toHaveBeenCalledWith(['apod/2020-10-20']);
  });
});
