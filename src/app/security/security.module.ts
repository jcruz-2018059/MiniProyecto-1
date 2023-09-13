// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project
import { ExerciseComponent } from './components/exercise/exercise.component';
import { NumbercommasDirective } from './directives/numbercommas.directive';
import { ChangecolorDirective } from './directives/changecolor.directive';
import { CopyiconDirective } from './directives/copyicon.directive';
import { SecurityRoutingModule } from './security-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CutTextPipe } from './pipes/cut-text.pipe';

@NgModule({
  declarations: [
    ExerciseComponent,
    NumbercommasDirective,
    ChangecolorDirective,
    CopyiconDirective,
    CutTextPipe
  ],
  imports: [CommonModule, SecurityRoutingModule, SharedModule]
})
export class SecurityModule {}
