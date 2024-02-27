import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartproudcts: any[] = [];
  constructor(private service: ApiServiceService) {

  }
  ngOnInit(): void {
    this.getCartProduct()
  }

  // getCartProduct() {
  //   this.service.getAllProducts().subscribe((res: any) => {
  //     this.cartproudcts = res;
  //     console.log("cart products", this.cartproudcts);

  //   })
  // }
  getCartProduct() {
    this.service.getAllProducts().subscribe({
      next: (res: any) => {
        this.cartproudcts = res;
        console.log("api cart", this.cartproudcts);
      },
      error: (error: any) => {
        console.log("error fetching", error);

      }
    })
  }

}
