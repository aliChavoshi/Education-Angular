import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './app.component.html',
  // template: `<app-card />`,
  // styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = "parent title";
  products = [
    {
      id: 1,
      name: 'لپ‌تاپ ایسوس مدل X515',
      price: 35000000,
      imageUrl: 'assets/images/laptop.jpg',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'موس بی‌سیم لاجیتک',
      price: 400000,
      imageUrl: 'assets/images/mouse.jpg',
      isAvailable: false,
    },
    {
      id: 3,
      name: 'کیبورد مکانیکی ردراگون',
      price: 1200000,
      imageUrl: 'assets/images/keyboard.jpg',
      isAvailable: true,
    },
    {
      id: 4,
      name: 'مانیتور ۲۴ اینچ سامسونگ',
      price: 7500000,
      imageUrl: 'assets/images/monitor.jpg',
      isAvailable: true,
    },
    {
      id: 5,
      name: 'هدست گیمینگ ایسوس',
      price: 2200000,
      imageUrl: 'assets/images/headset.jpg',
      isAvailable: false,
    },
  ];

  onAvailable(value:any){
    // this.products = this.products.filter((product) => product.id !== value.id);
    console.log("🚀 ~ AppComponent ~ onAvailable ~ value:", value);
  }
}
