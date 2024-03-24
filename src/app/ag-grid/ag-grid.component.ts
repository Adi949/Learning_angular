import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css',
})
export class AgGridComponent {
  rowData: any[];
  columnDefs: any[];
  constructor() {
    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 },
    ];

    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' },
    ];
  }
    ngOnInit(): void {
        if (typeof window !== 'undefined') {
            // Access window-dependent code here, such as initializing Ag-Grid
            // For example:
            // const gridOptions = {
            //     rowData: this.rowData,
            //     columnDefs: this.columnDefs
            // };
            // new agGrid.Grid(document.querySelector('#myGrid'), gridOptions);
        }
    }
  // columnDefs: ColDef[] = [
  //   { headerName: 'Make', field: 'make' },
  //   { headerName: 'Model', field: 'model' },
  //   { headerName: 'Price', field: 'price' },
  // ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 },
  // ];
}
