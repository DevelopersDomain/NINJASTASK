// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module'; // Import routing module
import { HeaderComponent } from './layouts/header/header.component';
import { TaskListComponent } from './features/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './utility/pipes/orderby.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    TaskListComponent,OrderByPipe
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,FormsModule,
    AppRoutingModule // Add AppRoutingModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
