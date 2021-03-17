import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./home/home.component";
import {InscripcionesComponent} from "./components/inscripciones/inscripciones.component"
import {ProfessorComponent} from "./components/professor/professor.component"

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  {path:"inscripciones",component:InscripcionesComponent,pathMatch:"full"},
  {path:"profesor",component:ProfessorComponent,pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routing = RouterModule.forRoot(routes);