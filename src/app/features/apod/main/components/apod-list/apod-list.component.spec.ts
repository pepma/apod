import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodListComponent } from './apod-list.component';

describe('ApodListComponent', () => {
  let component: ApodListComponent;
  let fixture: ComponentFixture<ApodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
