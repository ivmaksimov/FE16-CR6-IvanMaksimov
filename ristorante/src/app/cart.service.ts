import { Injectable } from '@angular/core';
import { Ddishes } from './Ddishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Ddishes[] = [];

  constructor() { }

  addToCart(dish: Ddishes) {
    this.items.push(dish);
  }



  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
