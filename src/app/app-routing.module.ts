import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './add-cat/add-cat.component';
import { CatListComponent } from './cat-list/cat-list.component';

const routes: Routes = [
  {
    path:"",
    component:CatListComponent
  },
  {
    path:"addCat",
    component:AddCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
