import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  columnasTabla: string[];
  servicioTabla;

  constructor(private exampleService: ExampleService) {
    this.columnasTabla = ['Usuario', 'Id', 'Descripcion'];
    this.servicioTabla = this.exampleService.getTodos();
  }

  ngOnInit() {}
}
