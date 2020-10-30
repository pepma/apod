import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApodDetailComponent } from './card-apod-detail.component';

describe('CardApodDetailComponent', () => {
  let component: CardApodDetailComponent;
  let fixture: ComponentFixture<CardApodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardApodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardApodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
