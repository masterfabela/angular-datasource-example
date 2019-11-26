import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { Example } from 'src/app/models/example.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

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
  filtroIdUsuario = new FormControl('');
  filtroId = new FormControl('');
  filtroDescripcion = new FormControl('');
  valoresFiltros = {
    idUsuario: '',
    id: '',
    descripcion: '',
  };

  ngOnInit() {
    this.filtroDescripcion.valueChanges.subscribe(descripcion => {
      this.valoresFiltros.descripcion = descripcion;
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
    this.filtroId.valueChanges.subscribe(id => {
      this.valoresFiltros.id = id;
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
    this.filtroIdUsuario.valueChanges.subscribe(idUsuario => {
      this.valoresFiltros.idUsuario = idUsuario;
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
  }
}

export class ExampleDataSource extends MatTableDataSource<any> {
  constructor(private exampleService: ExampleService) {
    super();
  }
  connect(): Observable<Example[]> {
    return this.exampleService.getTodos();
  }
  disconnect() {}
}
