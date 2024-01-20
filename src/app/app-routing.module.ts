import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './view/client/client.component';

const routes: Routes = [
  {path:"",redirectTo:"/home/terrain",pathMatch:'full'},
  {path:"home", children:
  [
    {path:"terrain",component:ClientComponent},
  ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
