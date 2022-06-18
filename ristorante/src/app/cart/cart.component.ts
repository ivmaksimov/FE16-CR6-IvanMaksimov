import { Component, OnInit } from '@angular/core';
import { Ddishes } from '../Ddishes';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Ddishes[] = [];

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  get itemPrice(): number{
    let total: number = 0;
    for(const item of this.items){
      total += item.price;
    }
    return total;
  }

  get serviceFee():number{
    return this.itemPrice * 0.1;
  }

  

  get discount(): number{
    let total: number = this.itemPrice + this.serviceFee;
    let discount: number = 0;
    if (total >= 40){
      discount = total * 0.15;
    }
    return discount;
  }
  

  get totalPrice (): number{
    return (this.itemPrice + this.serviceFee);
  }

  roundTo (num: number, places: number) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
  };

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    
  }

}
