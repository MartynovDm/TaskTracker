import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker-selector',
  templateUrl: './datepicker-selector.component.html',
  styleUrls: ['./datepicker-selector.component.scss']
})
export class DatepickerSelectorComponent implements OnInit {

  /**
   * Текущая дата
   */
  currentDate = moment().format('MMMM YYYY');

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Выбор месяца
   */
  changeMonth(dir: number): void {
    this.currentDate = moment(this.currentDate).add(dir, 'month').format('MMMM YYYY');
  }

}
