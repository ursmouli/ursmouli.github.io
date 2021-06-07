import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
  { path: 'grades', loadChildren: () => import('./grades/grades.module').then(m => m.GradesModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
