import { Component, OnInit, Input } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
  providers: [ExampleService],
})
export class TablaComponent implements OnInit {
  @Input() dataService: Observable<any>;
  @Input() columns: string[];

  dataSource: MatTableDataSource<object>;
  displayedColumns = this.columns;
  controles: FormControl[];
  valoresFiltros: string[];

  constructor() {
    console.log([this.displayedColumns]);
    this.dataService.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      if (this.dataSource.data.length < 1000) {
        this.activarFiltrosLocales();
      }
    });
  }

  ngOnInit() {
    console.log('inicia');
  }

  activarFiltrosLocales() {
    this.dataSource.filterPredicate = this.createFilter();
    this.registrarFiltros();
  }

  registrarFiltros() {
    this.columns.forEach(() => {
      const filtro = new FormControl('');
      filtro.valueChanges.subscribe(valorFiltro => {
        this.valoresFiltros.push(valorFiltro);
      });
      this.controles.push(filtro);
    });
    this.dataSource.filter = JSON.stringify(this.valoresFiltros);
  }

  createFilter(): (data: any, filtros: string) => boolean {
    const filterFunction = (data, filtros): boolean => {
      const terminosDeBusqueda = JSON.parse(filtros);
      const valoresFila = Object.values(data);
      let retorno = true;
      for (let i: number; i < terminosDeBusqueda.length; i++) {
        if (
          valoresFila[i]
            .toString()
            .toLowerCase()
            .indexOf(terminosDeBusqueda[i]) === -1
        ) {
          retorno = false;
        }
      }
      return retorno;
    };
    return filterFunction;
  }
}
