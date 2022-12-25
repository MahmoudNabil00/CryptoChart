import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  selectedCurrency$ = new BehaviorSubject('USD'); 
  // private selectedCurrency$ : BehaviorSubject<string> = new BehaviorSubject<string>("INR");
  // getCurrency(){
  //   return this.selectedCurrency$.asObservable();
  // }
  // setCurrency(currency : string){
  //   this.selectedCurrency$.next(currency);
  // }
  constructor(private http : HttpClient) { }
  getAllCurrency(currency:any){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  getTrendingCurrency(currency:any){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  getGraphicalCurrencyData(coinId:any, currency:any, days: any){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
  }
  getCurrencyById(coinId:any){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }

}
