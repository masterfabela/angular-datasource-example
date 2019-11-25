import { Component, OnInit } from '@angular/core';
import { Lesson } from './lesson.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  constructor() {}

  dataSource: Array<Lesson> = [];

  ngOnInit() {}
}
