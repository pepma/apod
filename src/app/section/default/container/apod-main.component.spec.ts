import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApodTypeEnum, PlanetaryFacadeService } from '@facades/planetary';
import { DialogAddService } from '@features/apod/add';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { mockProperty } from '@test/mock-property';
import { MockProviders } from 'ng-mocks';
import { of } from 'rxjs';
import { ApodMainComponent } from './apod-main.component';

describe('ApodMainComponent', () => {
  let component: ApodMainComponent;
  let fixture: ComponentFixture<ApodMainComponent>;
  let planetaryFacadeService: PlanetaryFacadeService;
  let dialogAddService: DialogAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodMainComponent],
      providers: [MockProviders(PlanetaryFacadeService, DialogAddService)],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodMainComponent);
    component = fixture.componentInstance;
    planetaryFacadeService = TestBed.inject(PlanetaryFacadeService);
    dialogAddService = TestBed.inject(DialogAddService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list', () => {
    spyOn(dialogAddService, 'beforeClose').and.returnValue(of());
    mockProperty(planetaryFacadeService, 'list$', of([]));
    mockProperty(planetaryFacadeService, 'hasItems', true);
    fixture.detectChanges();
    const observerSpy = subscribeSpyTo(component.list$);
    expect(observerSpy.getLastValue()).toEqual([]);
  });

  it('should select apod', () => {
    spyOn(dialogAddService, 'beforeClose').and.returnValue(of());
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onSelectApod({ date: '2020-10-20', type: ApodTypeEnum.NASA });
    expect(router.navigate).toHaveBeenCalledWith(['apod/2020-10-20/nasa']);
  });

  it('should remove apod', () => {
    spyOn(dialogAddService, 'beforeClose').and.returnValue(of());
    spyOn(planetaryFacadeService, 'remove');
    component.onRemoveApod({});
    expect(planetaryFacadeService.remove).toHaveBeenCalledWith({});
  });

  it('should add item on beforeclose', () => {
    spyOn(dialogAddService, 'beforeClose').and.returnValue(of({}));
    spyOn(planetaryFacadeService, 'add');
    spyOn(dialogAddService, 'close');
    fixture.detectChanges();
    expect(planetaryFacadeService.add).toHaveBeenCalledWith({});
    expect(dialogAddService.close).toHaveBeenCalled();
  });

  it('should open dialog', () => {
    spyOn(dialogAddService, 'open');
    component.onCreateCustomApod();
    expect(dialogAddService.open).toHaveBeenCalled();
  });
});
