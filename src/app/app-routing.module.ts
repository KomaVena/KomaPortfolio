import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent,},
  { path: 'project', component: ProjectComponent,},
  { path: 'contact', component: ContactComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export class ButtonToggleOverviewExample { }
export const routingComponents = [HomeComponent, AboutComponent, ProjectComponent, AboutComponent, ContactComponent]
