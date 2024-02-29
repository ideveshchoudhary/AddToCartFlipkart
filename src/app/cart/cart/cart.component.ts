import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartproudcts: any[] = [];
  grandTotal: number = 0;
  constructor(private cart: CartService) {

  }
  ngOnInit(): void {
    this.cart.getProducts()
      .subscribe(res => {
        this.cartproudcts = res;
        this.grandTotal = this.cart.getTotalPrice();
      })
  }


}
