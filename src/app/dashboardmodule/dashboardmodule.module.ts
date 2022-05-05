import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardmoduleComponent } from './dashboardmodule.component';
import { RouterModule, Routes } from '@angular/router';
import{MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from'@angular/material/input'

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
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  exports: [
    DashboardmoduleComponent
  ]
})
export class DashboardmoduleModule { }
