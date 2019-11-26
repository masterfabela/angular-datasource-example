import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Example } from '../models/example.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class ExampleService {
  searchOptions = [];
  exampleUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  getExampleJSON(id: number): Observable<Example> {
    return this.http.get<Example>(this.exampleUrl);
  }

  getTodos(): Observable<Example[]> {
    const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Example[]>(todosUrl);
  }
}
