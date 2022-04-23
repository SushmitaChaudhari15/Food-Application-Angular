import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'menu/:id', component:MenuPageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
