import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { TaskTrackerRoutingModule } from './task-tracker-routing.module';

@NgModule({
  declarations: [
    DatepickerComponent,
    TaskDetailComponent,
    TaskTrackerComponent
  ],
  imports: [
    TaskTrackerRoutingModule
  ],
  providers: [],
})
export class TaskTrackerModule { }
