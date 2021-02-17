import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { TryeasyeatsComponent } from './tryeasyeats/tryeasyeats.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    ProjectComponent,
    TryeasyeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
