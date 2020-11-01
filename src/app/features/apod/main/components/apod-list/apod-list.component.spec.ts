import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { ApodListComponent } from './apod-list.component';
import { CardApodDetailComponent } from '../../../../common';

describe('ApodListComponent', () => {
  let component: ApodListComponent;
  let fixture: ComponentFixture<ApodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodListComponent, MockComponents(CardApodDetailComponent)],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has 3 list elements', () => {
    component.list = [{ date: '2020-10-10' }, { date: '2020-10-11' }, { date: '2020-10-12' }];
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.detail')).length).toEqual(3);
  });

  it('should emit event', () => {
    spyOn(component.select, 'emit');
    component.onSelectApod({ date: '2020-10-10' });
    expect(component.select.emit).toHaveBeenCalled();
  });
});
