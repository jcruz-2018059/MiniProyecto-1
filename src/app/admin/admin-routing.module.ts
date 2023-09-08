// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'form', component: FormComponent },
      { path: '**', redirectTo: 'form' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
