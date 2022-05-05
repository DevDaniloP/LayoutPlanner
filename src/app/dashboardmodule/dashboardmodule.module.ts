import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardmoduleComponent } from './dashboardmodule.component';
import { RouterModule, Routes } from '@angular/router';
import{MatCardModule} from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
const routes:Routes=[
  {
    path:'',component:DashboardmoduleComponent
  }
]

@NgModule({
  declarations: [
    DashboardmoduleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    DragDropModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    DashboardmoduleComponent
  ]
})
export class DashboardmoduleModule { }
