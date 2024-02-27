import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(private service: ApiServiceService) {

  }
  ngOnInit(): void {

  }

  getTheProducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
      console.log("Api wroking", this.products);
    }
    )
  }


}
