import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private service: ApiServiceService, private cart: CartService) {

  }
  ngOnInit(): void {
    this.getTheProducts()
  }

  getTheProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log("Api wroking", this.products);
    })
  }
  addToCart(data: string) {
    this.cart.addtoCart(data);
    console.log("product added");

  }


}
