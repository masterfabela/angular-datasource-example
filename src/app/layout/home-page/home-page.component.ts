import { Component, OnInit } from '@angular/core';
import { Example } from 'src/app/models/example.model';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  examples: Example[];

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService.getTodos().subscribe(examples => {
      this.examples = examples;
    });
  }
}
