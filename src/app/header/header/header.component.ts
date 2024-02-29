import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalitem:any;

  constructor(private cartService:CartService){}


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalitem = res.length
    })
  }
}
