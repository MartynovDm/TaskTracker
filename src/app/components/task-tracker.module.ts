import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { TaskTrackerRoutingModule } from './task-tracker-routing.module';
import { DatepickerSelectorComponent } from './datepicker-selector/datepicker-selector.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    TaskDetailComponent,
    TaskTrackerComponent,
    DatepickerSelectorComponent
  ],
  imports: [
    TaskTrackerRoutingModule
  ],
  providers: [],
})
export class TaskTrackerModule { }
