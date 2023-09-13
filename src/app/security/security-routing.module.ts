// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { ExerciseComponent } from './components/exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'exercise', component: ExerciseComponent },
      { path: '**', redirectTo: 'exercise' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {}
