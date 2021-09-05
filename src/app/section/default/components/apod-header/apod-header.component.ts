import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-apod-header',
  templateUrl: './apod-header.component.html',
  styleUrls: ['apod-header.component.scss']
})
export class ApodHeaderComponent {
  @Input() daysToShow: number;
  @Output() createCustomApod = new EventEmitter();

  addNewCustomApod(): void {
    this.createCustomApod.emit();
  }
}
