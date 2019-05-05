import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './ajout/ajout.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:ApplicationComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'ajouter',component:AjoutComponent},
    {path:'edit/:id',component:EditComponent},
    {path:'poc',component:ContainerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
