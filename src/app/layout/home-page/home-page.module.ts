import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatIconModule,
} from '@angular/material';
import { TablaComponent } from 'src/app/componentes/tabla/tabla.component';
import { SearchTableHeaderComponent } from 'src/app/componentes/tabla/search-table-header/search-table-header.component';
import { HomePageComponent } from './home-page.component';
import { ExampleService } from 'src/app/services/example.service';

@NgModule({
  declarations: [TablaComponent, SearchTableHeaderComponent, HomePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [HomePageComponent],
  providers: [ExampleService],
})
export class HomePageModule {}
