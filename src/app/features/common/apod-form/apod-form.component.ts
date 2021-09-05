import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { APOD_DATE_FORMATS, CORE_PATTERNS } from '@core/settings';
import { Apod, ApodTypeEnum } from '@facades/planetary';
import * as moment from 'moment';

@Component({
  selector: 'app-apod-form',
  templateUrl: './apod-form.component.html',
  styleUrls: ['./apod-form.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: APOD_DATE_FORMATS }],
})
export class ApodFormComponent implements OnInit {
  addFormmGroup: FormGroup;

  @Input() info: Apod;
  @Output() cancelAdd = new EventEmitter();
  @Output() saveAdd = new EventEmitter<Apod>();

  get controls(): {
    [key: string]: AbstractControl;
  } {
    return this.addFormmGroup.controls;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addFormmGroup = this.fb.group({
      date: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(CORE_PATTERNS.url)]],
      explanation: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });
  }

  private convertFormToApod(): Apod {
    const date = this.addFormmGroup.get('date').value as moment.Moment;
    return {
      ...this.addFormmGroup.value,
      date: date.format(APOD_DATE_FORMATS.parse.dateInput),
      type: ApodTypeEnum.USER,
    } as Apod;
  }

  save(): void {
    this.saveAdd.emit(this.convertFormToApod());
  }

  cancel(): void {
    this.cancelAdd.emit();
  }

  get requiredMessage(): string {
    return 'Required field';
  }
}
