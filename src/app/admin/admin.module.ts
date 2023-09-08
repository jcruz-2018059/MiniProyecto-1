// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Third Parties
import { AdminRoutingModule } from './admin-routing.module';

// Project
import { FormComponent } from './components/form/form.component';
import { TimeoutComponent } from './components/timeout/timeout.component';

@NgModule({
  declarations: [FormComponent, TimeoutComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule]
})
export class AdminModule {}
