// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'material', component: RedirectComponent },
      { path: '**', redirectTo: 'material' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule {}
