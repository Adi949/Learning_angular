import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { HttpComponent } from './http/http.component';
import { SignalComponent } from './signal/signal.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DirectivesComponent, HttpComponent,SignalComponent,AgGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'learning_angular';
}
