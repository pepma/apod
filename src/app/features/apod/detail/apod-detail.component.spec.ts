import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetaryFacadeService } from '@facades/planetary';
import { MockProvider } from 'ng-mocks';

import { ApodDetailComponent } from './apod-detail.component';

describe('ApodDetailComponent', () => {
  let component: ApodDetailComponent;
  let fixture: ComponentFixture<ApodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodDetailComponent],
      providers: [MockProvider(PlanetaryFacadeService)],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show detail on init', () => {
    expect(component).toBeTruthy();
  });
});
