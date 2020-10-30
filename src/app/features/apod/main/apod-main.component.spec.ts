import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetaryFacadeService } from '@facades/planetary';
import { MockProvider } from 'ng-mocks';

import { ApodMainComponent } from './apod-main.component';

describe('ApodMainComponent', () => {
  let component: ApodMainComponent;
  let fixture: ComponentFixture<ApodMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApodMainComponent],
      providers: [MockProvider(PlanetaryFacadeService)],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
