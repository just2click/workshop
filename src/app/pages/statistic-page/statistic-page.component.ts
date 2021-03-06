import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  marketPrice: any
  transSection: any
  sub: Subscription
  chartInfo: any

  dataM: any
  optionsM: any
  titleM: any
  nameM: any

  dataT: any
  optionsT: any
  titleT: any
  nameT: any

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.getMarketPrice()
    this.getTransSection()
  }

  async getMarketPrice() {
    this.marketPrice = await this.bitcoinService.getMarketPrice()
    this.setChartMarket(this.marketPrice)
  }

  setChartMarket(data: any) {
    var newArr = []
    var arrayData = data.values.map((val?: any) => {
      newArr = [`${new Date(val.x * 1000).toLocaleDateString()}`, val.y]
      return newArr
    })

    this.dataM = [...arrayData]
    this.optionsM = {
      hAxis: { title: 'Date' },
      vAxis: { title: 'USD' }
    }

    this.titleM = this.marketPrice.description
    this.nameM = this.marketPrice.name
  }

  async getTransSection() {
    this.transSection = await this.bitcoinService.getConfirmedTransactions()
    this.setChartTrans(this.transSection)
  }

  setChartTrans(data: any) {
    var newArr = []
    var arrayData = data.values.map((val?: any) => {
      newArr = [`${new Date(val.x * 1000).toLocaleDateString()}`, (val.y)]
      return newArr
    })

    this.dataT = [...arrayData]
    this.optionsT = {
      hAxis: { title: 'Date' },
      vAxis: { title: 'Bitcoins transitions' }
    }

    this.titleT = this.transSection.description
    this.nameT = this.transSection.name
  }

}
