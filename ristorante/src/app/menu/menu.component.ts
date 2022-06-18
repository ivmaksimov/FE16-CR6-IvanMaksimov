import { Component, OnInit } from '@angular/core';

import { Ddishes } from '../Ddishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  

  dishes: Ddishes[] = dishes;
  

  constructor(private cartService: CartService) { }

  addToCart(id: number) {
    window.alert('This dish was added to the cart!');
    this.cartService.addToCart(this.dishes[id]);
    
  }

  ngOnInit(): void {
    
  }

}


