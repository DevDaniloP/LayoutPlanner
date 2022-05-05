import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutSideComponent } from './layout-main/layout-side/layout-side.component';
import { LayoutTabComponent } from './layout-main/layout-tab/layout-tab.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatMenuModule} from '@angular/material/menu'; 
@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LayoutSideComponent,
    LayoutTabComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
