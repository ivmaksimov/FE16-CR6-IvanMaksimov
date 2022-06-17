import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { Ddishes } from '../Ddishes';
import { dishes } from '../dishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: Ddishes = {} as Ddishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    window.alert('This dish was added to the cart!');
    this.cartService.addToCart(this.dish);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['dishId'];
      this.dish = dishes[this.id];
    })
  }

}
