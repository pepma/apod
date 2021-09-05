import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApodTypeEnum, PlanetaryFacadeService } from '@facades/planetary';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/mock-property';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodDetailComponent } from './apod-detail.component';


describe('ApodDetailComponent', () => {
  let component: ApodDetailComponent;
  let fixture: ComponentFixture<ApodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodDetailComponent],
      providers: [
        MockProvider(PlanetaryFacadeService),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                date: '2010-10-10',
                type: ApodTypeEnum.USER,
              }),
            },
          },
        },
      ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to main', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.clickBack();
    expect(router.navigate).toHaveBeenCalledWith(['/apod']);
  });

  it('should get item from url', () => {
    const planetaryFacadeService = TestBed.inject(PlanetaryFacadeService);

    mockProperty(planetaryFacadeService, 'list$', of([{ date: '2010-10-10', type: ApodTypeEnum.USER }]));
    fixture.detectChanges();

    const observerSpy = subscribeSpyTo(component.item$);
    expect(observerSpy.getLastValue()).toBeDefined();
  });
});
