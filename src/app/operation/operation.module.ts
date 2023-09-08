// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { RedirectComponent } from './components/redirect/redirect.component';
import { OperationRoutingModule } from './operation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    RedirectComponent,
    DatepickerComponent,
    DialogComponent,
    TableComponent,
    StepperComponent
  ],
  imports: [CommonModule, OperationRoutingModule, SharedModule]
})
export class OperationModule {}
