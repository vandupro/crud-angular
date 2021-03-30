import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterListComponent } from './monster/monster-list/monster-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MonsterAddComponent } from './monster/monster-add/monster-add.component';
import { MonsterUpdateComponent } from './monster/monster-update/monster-update.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: '', component: MonsterListComponent},
      {path: 'add', component: MonsterAddComponent},
      {path: 'update/:id', component: MonsterUpdateComponent}
    ]
  },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
