import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApodHeaderComponent } from './apod-header.component';


describe('ApodListComponent', () => {
  let component: ApodHeaderComponent;
  let fixture: ComponentFixture<ApodHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApodHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ApodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    spyOn(component.createCustomApod, 'emit');
    component.addNewCustomApod();
    expect(component.createCustomApod.emit).toHaveBeenCalled();
  });
});
