import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentCurrency = 'USD'
  constructor(private api : ApiService){
    
  }
  ngOnInit(): void {
  }
  sendCurrentCurrency(value:any){
    this.currentCurrency = value
    // console.log(this.currentCurrency)
    this.api.selectedCurrency$.next(value)
  }
}
