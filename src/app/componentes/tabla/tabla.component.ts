import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { Example } from 'src/app/models/example.model';
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
    this.dataSource = new MatTableDataSource();
    examplesService.getTodos().subscribe(examples => {
      this.dataSource.data = examples;
      if (examples.length < 100) {
        this.dataSource.filterPredicate = this.createFilter();
        this.registrarFiltros();
      }
    });
  }

  examples: Array<Example> = [];
  displayedColumns = ['userId', 'id', 'title', 'title1'];
  dataSource;
  filtroIdUsuario: FormControl;
  filtroId: FormControl;
  filtroDescripcion: FormControl;
  valoresFiltros = {
    idUsuario: '',
    id: '',
    descripcion: '',
  };

  ngOnInit() {}

  registrarFiltros() {
    this.filtroDescripcion = new FormControl('');
    this.filtroDescripcion.valueChanges.subscribe(descripcion => {
      this.valoresFiltros.descripcion = descripcion.toLowerCase();
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
    this.filtroId = new FormControl('');
    this.filtroId.valueChanges.subscribe(id => {
      this.valoresFiltros.id = id.toLowerCase();
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
    this.filtroIdUsuario = new FormControl('');
    this.filtroIdUsuario.valueChanges.subscribe(idUsuario => {
      this.valoresFiltros.idUsuario = idUsuario.toLowerCase();
      this.dataSource.filter = JSON.stringify(this.valoresFiltros);
    });
  }

  createFilter(): (data: any, filtros: string) => boolean {
    const filterFunction = function(data, filtros): boolean {
      const terminosDeBusqueda = JSON.parse(filtros);
      return (
        data.userId
          .toString()
          .toLowerCase()
          .indexOf(terminosDeBusqueda.idUsuario) !== -1 &&
        data.title.toLowerCase().indexOf(terminosDeBusqueda.descripcion) !== -1 &&
        data.id
          .toString()
          .toLowerCase()
          .indexOf(terminosDeBusqueda.id) !== -1
      );
    };
    return filterFunction;
  }
}
