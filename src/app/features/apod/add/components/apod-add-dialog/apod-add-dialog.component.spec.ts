import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApodFormComponent } from '@features/common';
import { MockComponents } from 'ng-mocks';
import { ApodAddDialogComponent } from './apod-add-dialog.component';

describe('ApodAddDialogComponent', () => {
  let component: ApodAddDialogComponent;
  let fixture: ComponentFixture<ApodAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApodAddDialogComponent, MockComponents(ApodFormComponent)],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should emit cancel when close without info',
    waitForAsync(() => {
      component.cancel.subscribe(()=> expect(true));
      component.close(null);
    })
  );

  it(
    'should emit add when close with info',
    waitForAsync(() => {
      component.add.subscribe((info)=> {
        expect(info).toEqual({})
      })
      component.close({});

    })
  );
});
