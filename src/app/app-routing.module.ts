import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { TryeasyeatsComponent } from './tryeasyeats/tryeasyeats.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path:'easyeats',
    component: TryeasyeatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
