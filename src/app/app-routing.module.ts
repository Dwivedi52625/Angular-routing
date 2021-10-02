import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResturantComponent } from './resturant/resturant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/menu' ,pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'resturant', component: ResturantComponent},
  {path: 'user', component: UserComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent,MenuComponent,ResturantComponent,UserComponent, PageNotFoundComponent]
