import { RouterModule, Routes } from '@angular/router';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
  {
    path: 'taskmanager',
    component: TaskTrackerComponent,
  },
  {
    path: '',
    redirectTo: '/taskmanager',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TaskTrackerRoutingModule {
}

