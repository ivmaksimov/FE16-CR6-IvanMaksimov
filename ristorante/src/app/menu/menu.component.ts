import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Ddishes } from '../Ddishes';
import { dishes } from '../dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  dish: Ddishes = {} as Ddishes;
  id: number = 0;

  dishes: Ddishes[] = dishes;
  

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    window.alert('This dish was added to the cart!');
    this.cartService.addToCart(this.dish);
    console.log(this.dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['dishId'];
      this.dish = dishes[this.id];
    })
  }

}


