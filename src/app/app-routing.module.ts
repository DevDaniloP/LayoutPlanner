import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout-main/layout-main.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "dashboard" },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboardmodule/dashboardmodule.module").then(
            (m) => m.DashboardmoduleModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
