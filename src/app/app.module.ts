import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { ExampleService } from './services/example.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchTableHeaderComponent } from './componentes/tabla/search-table-header/search-table-header.component';

@NgModule({
  declarations: [AppComponent, TablaComponent, HomePageComponent, SearchTableHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
