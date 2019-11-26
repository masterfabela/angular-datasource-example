import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { Example } from 'src/app/models/example.model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  providers: [ExampleService],
})
export class TablaComponent implements OnInit {
  constructor(examplesService: ExampleService) {
    this.dataSource = new ExampleDataSource(examplesService);
  }

  examples: Array<Example> = [];
  displayedColumns = ['userId', 'id', 'title'];
  dataSource;

  ngOnInit() {}
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private exampleService: ExampleService) {
    super();
    this.connect();
  }
  connect(): Observable<Example[]> {
    return this.exampleService.getTodos();
  }
  disconnect() {}
}
