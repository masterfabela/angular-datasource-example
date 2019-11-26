import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Example } from 'src/app/models/example.model';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allExamples: Example[];
  autoCompleteList: any[];

  @ViewChild('autocompleteInput', { static: false }) autocompleteInput: ElementRef;
  @Output() selectedOption = new EventEmitter();

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService.getTodos().subscribe(examples => {
      this.allExamples = examples;
    });
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }

  private autoCompleteExpenseList(input) {
    const categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    const categoryList = [];
    if (typeof val !== 'string') {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val
      ? this.allExamples.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()))
      : this.allExamples;
  }

  displayFn(example: Example) {
    return example ? example.title : example;
  }

  filterExampleList(event) {
    const examples = event.source.value;
    if (!examples) {
      this.exampleService.searchOptions = [];
    } else {
      this.exampleService.searchOptions.push(examples);
      this.selectedOption.emit(this.exampleService.searchOptions);
    }
    this.focusOnPlaceInput();
  }

  removeExample(example) {
    const index = this.exampleService.searchOptions.indexOf(example);
    if (index >= 0) {
      this.exampleService.searchOptions.splice(index, 1);
      this.focusOnPlaceInput();
      this.selectedOption.emit(this.exampleService.searchOptions);
    }
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value();
  }
}
