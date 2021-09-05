import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField } from '@angular/material/form-field';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import * as moment from 'moment';
import { MockComponents } from 'ng-mocks';
import { ApodFormComponent } from './apod-form.component';
describe('ApodFormComponent', () => {
  let spectator: Spectator<ApodFormComponent>;
  const createComponent = createComponentFactory({
    component: ApodFormComponent,
    declarations: [MockComponents(MatFormField, MatError, MatDatepicker, MatDatepickerToggle)],
    imports: [ReactiveFormsModule,
      ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should exists', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('when all data is ok then emit event', () => {
    const spySave = spyOn(spectator.component.saveAdd,'emit');
    spectator.component.addFormmGroup.setValue({
      date: moment('01-01-2021'),
      title:'title',
      explanation: 'explanation',
      url:'http://test1.com'
    })
    spectator.detectChanges();
    spectator.component.save();
    expect(spySave).toHaveBeenCalledTimes(1);
  });

  it('when cancel then emit event', () => {
    const spyCancel = spyOn(spectator.component.cancelAdd,'emit');
    spectator.component.addFormmGroup.setValue({
      date: moment('01-01-2021'),
      title:'title',
      explanation: 'explanation',
      url:'http://test1.com'
    })
    spectator.detectChanges();
    spectator.component.cancel();
    expect(spyCancel).toHaveBeenCalledTimes(1);
  });
});
