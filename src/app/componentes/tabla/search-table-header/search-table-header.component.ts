import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-table-header',
  templateUrl: './search-table-header.component.html',
  styleUrls: ['./search-table-header.component.scss'],
})
export class SearchTableHeaderComponent implements OnInit {
  @Input() controlador: FormControl;
  @Input() nombre: string;

  constructor() {}

  ngOnInit() {}
}
