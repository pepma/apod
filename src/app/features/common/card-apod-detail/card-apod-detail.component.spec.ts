import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';

import { CardApodDetailComponent } from './card-apod-detail.component';
import { TypeCarApodDetail } from './model/cad-apod-detail.model';

describe('CardApodDetailComponent', () => {
  let component: CardApodDetailComponent;
  let fixture: ComponentFixture<CardApodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardApodDetailComponent, MockComponents(MatCard, MatCardHeader, MatCardTitle, MatCardContent)],
      imports: [],
    }).compileComponents();
    fixture = TestBed.createComponent(CardApodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should PreviewMode is true', () => {
    component.mode = TypeCarApodDetail.PREVIEW;
    fixture.detectChanges();
    expect(component.isPreviewMode).toEqual(true);
  });

  it('should PreviewMode is false', () => {
    component.mode = TypeCarApodDetail.DETAIL;
    fixture.detectChanges();
    expect(component.isPreviewMode).toEqual(false);
  });

  it('should emit click detail', () => {
    spyOn(component.select, 'emit');
    component.clickDetail();
    expect(component.select.emit).toHaveBeenCalled();
  });
});
