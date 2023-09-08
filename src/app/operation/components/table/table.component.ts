// Angular
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<UserElements>(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface UserElements {
  id: number;
  name: string;
  age: number;
}

const ELEMENT_DATA: UserElements[] = [
  { id: 1, name: 'Javier', age: 18 },
  { id: 2, name: 'Carlos', age: 11 },
  { id: 3, name: 'Mario', age: 20 },
  { id: 4, name: 'Anita', age: 14 },
  { id: 5, name: 'Paula', age: 19 },
  { id: 6, name: 'Nissany', age: 23 },
  { id: 7, name: 'Mateo', age: 22 },
  { id: 8, name: 'Mily', age: 34 },
  { id: 9, name: 'Pedro', age: 21 },
  { id: 10, name: 'Diego', age: 20 },
  { id: 11, name: 'Marta', age: 10 },
  { id: 12, name: 'Omar', age: 13 }
];
