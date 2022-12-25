import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  trendingData : any = []
  currentCurrency = 'USD'
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];

  constructor(private api : ApiService,
    private route : Router) { }

  ngOnInit(): void {
    this.api.selectedCurrency$.subscribe(res=>{
      this.currentCurrency = res
      console.log(this.currentCurrency)
      this.api.getTrendingCurrency(this.currentCurrency).pipe(first()).subscribe(res=>{
        this.trendingData = res
        console.log(res)
      })
      this.api.getAllCurrency(this.currentCurrency).pipe(first()).subscribe(res=>{
        console.log(res)
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    })
    // this.api.getCurrencyById(this.currentCurrency).pipe(first()).subscribe(res=>{
    //   console.log(res)
    // })
    // this.api.getGraphicalCurrencyData('','',1).pipe(first()).subscribe(res=>{
    //   console.log(res)
    // })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  goThroughDetails(item:any){
    this.route.navigateByUrl(`details/${item.id}`)
  }
}


