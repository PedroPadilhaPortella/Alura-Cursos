import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Username } from "./username/username";

@Component({
  selector: 'app-banner',
  imports: [DatePipe, TitleCasePipe, CurrencyPipe, Username],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  balance = input.required<number>();
  
  currentDate = new Date();
}
