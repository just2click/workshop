import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
// google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

import Axios from 'axios'
import { StorageService } from './storage.service';
// import axios from 'axios'
var axios = Axios.create({
  withCredentials: false
})

const KeyM = 'marketDB'
const KeyT = 'transDB'

@Injectable({
  providedIn: 'root'
})

export class BitcoinService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  async getRate(val: any) {
    // console.log('hi');
    const storage = this.storageService.load(val)
    console.log('stirage:', storage);
    if (storage) return storage.data
    else {
      const url = `https://blockchain.info/tobtc?currency=USD&value=${val}`
      const res = await axios.get(url)
      this.storageService.save(val, res)
      console.log('res.data:', res.data);
      return res.data
    }
  }

  // public getMarketPrice() {
  //   return this.http.get<{ values: any, name: string, description: any }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
  //     .pipe(
  //       map(res => {
  //         return { name: res.name, title: res.description, data: res.values }
  //       })
  //     )
  // }
  async getMarketPrice() {
    const priceStorage = this.storageService.load(KeyM)
    if (priceStorage) return priceStorage.data
    else {
      const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
      const res = await axios.get(url)
      this.storageService.save(KeyM, res)
      // res.
      console.log('market res:', res.data);
      return res

    }
  }
  async getConfirmedTransactions() {
    const transStorage = this.storageService.load(KeyT)
    if (transStorage) return transStorage.data
    else {
      const url = `https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&format=json&cors=true`
      const res = await axios.get(url)
      this.storageService.save(KeyT, res)
      // res.
      console.log('trans res:', res.data);
      return res
    }
  }
  // drawChart(obj: any) {
  // var arrayData = ['major bitcoin exchanges', 'Average USD market price']
  //   var arrayData: any
  //   // console.log('obj.values:', obj.values);
  //   var data = obj.values
  //   var newArr = [data[0].x, data[0].y]
  //   var arrayData = data.map((val: any) => {
  //     newArr = [val?.x, val?.y]
  //     return newArr
  //   })
  //   console.log(arrayData);

  //   var data: any = google.visualization.arrayToDataTable([
  //     ['major bitcoin exchanges', 'Average USD market price'],
  //     [...arrayData]
  //   ])
  //   var options = {
  //     title: 'Market Price (USD)',
  //     hAxis: { title: 'major bitcoin exchanges', titleTextStyle: { color: '#e134eb' } },
  //     vAxis: { minValue: 0 }
  //   }
  //   var chart = new google.visualization.AreaChart(document.getElementById('chart_div'))
  //   chart.draw(data, options)
  // }


  // public drawChart(obj: any) {
  // var arrayData: any
  // // console.log('obj.values:', obj.values);
  // var data = obj.values
  // var newArr = [data[0].x, data[0].y]
  // var arrayData = data.map((val: any) => {
  //   newArr = [val?.x, val?.y]
  //   return newArr
  // })
  // console.log(arrayData);

  // var data: any = google.visualization.arrayToDataTable([
  //   ['major bitcoin exchanges', 'Average USD market price'],
  //   [...arrayData]
  // ])
  // var options = {
  //   title: 'Market Price (USD)',
  //   hAxis: { title: 'major bitcoin exchanges', titleTextStyle: { color: '#e134eb' } },
  //   vAxis: { minValue: 0 }
  // }
  // console.log('adina');

  // // console.log({ title: options.title, type: 'AreaChart', data, options, columnNames: ['major bitcoin exchanges', 'Average USD market price'] });

  // return { title: options.title, type: 'AreaChart', data, options, columnNames: ['major bitcoin exchanges', 'Average USD market price'] }

}
