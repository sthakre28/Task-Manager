import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AboutComponent } from "./admin/about/about.component";
import { ProjectsComponent } from "./admin/projects/projects.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeeComponent } from './employee/employee.component';
import { OnwerComponent } from './onwer/onwer.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "signup", component: SignupComponent },
  { path: "tasks", component: TasksComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "owner", component:OnwerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule
{
}