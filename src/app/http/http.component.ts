import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpInterceptor,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../api/products.service';
import { httpInterceptorInterceptor } from '../http-interceptor.interceptor';

@Component({
  selector: 'app-http',
  standalone: true,
  providers: [ProductsService],
  imports: [HttpClientModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {
  constructor(private api: ProductsService) {}

  ngOnInit() {
    this.api.getProducts('https://dummyjson.com/products').subscribe({
      next: (data) => {
        console.log('data recieved');
        console.log(data);
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => console.log('response completed'),
    });
  }
}
