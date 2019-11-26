import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';


const routes: Routes = [{path:'presentation',component:PresentationComponent},
                        {path:'employesList',component:EmployesListComponent},
                        {path:'employesList/:matricule',component:SelectedEmployeComponent},
                        {path:'ajoutEmploye',component:AjoutEmployeComponent},
                        {path:'',redirectTo:'presentation',pathMatch:'full'},
                        {path:'**',component:ErreurComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
