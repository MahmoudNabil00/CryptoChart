import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  currentData : any = {}
  currentId : any = ''
  currentCurrency : any = 'USD'
  days:any = 1
  graphicalData: any = []
  public lineChartData: ChartConfiguration<any>['data'] = {
    datasets: [
      // Data will reflect inside chart
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',
      }
    ],
    // X axes
    labels: []
  };
  public lineChartOptions: ChartConfiguration<any>['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  constructor(private api : ApiService,
    private router : Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.selectedCurrency$.subscribe(res=>{
      this.currentCurrency = res
      this.getGraphData()
    })
    this.currentId = this.route.snapshot.paramMap.get('id')
    this.api.getCurrencyById(this.currentId).subscribe(res=>{
      this.currentData = res

      console.log(res)
    })
    this.getGraphData()
  }
  getGraphData(){
    this.api.getGraphicalCurrencyData(this.currentId,this.currentCurrency,this.days).subscribe((res:any)=>{
      setTimeout(() => {
        this.myLineChart?.chart?.update()
      }, 200);
      this.graphicalData = res.prices // [time , price] y:price , x:time
      // this.lineChartData.labels = res.prices.map((ele:any)=>{
      //   return ele[0]
      // })

      //Work 100%
      let newArray1 : any = []
      let newArray2 : any = []
      res.prices.forEach((ele:any)=>{
        let time = new Date(ele[0])
        let data = time.getHours() > 12 ? `${time.getHours()-12}:${time.getMinutes()} PM` :
        `${time.getHours()}:${time.getMinutes()} AM` 
        newArray1.push(data)
        newArray2.push(ele[1])
      })
      this.lineChartData.labels = newArray1
      this.lineChartData.datasets[0].data = newArray2
      console.log(res.prices)
    })
  }
}
