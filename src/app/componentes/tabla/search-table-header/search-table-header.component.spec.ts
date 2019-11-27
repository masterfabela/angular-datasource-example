import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableHeaderComponent } from './search-table-header.component';

describe('SearchTableHeaderComponent', () => {
  let component: SearchTableHeaderComponent;
  let fixture: ComponentFixture<SearchTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
