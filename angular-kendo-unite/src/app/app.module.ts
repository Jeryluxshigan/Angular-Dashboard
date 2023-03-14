import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';









@NgModule({
  declarations: [
    AppComponent,
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
