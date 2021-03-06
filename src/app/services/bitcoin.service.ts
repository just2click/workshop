import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


import axios from 'axios'
import { StorageService } from './storage.service';


const KeyM = 'marketDB'
const KeyT = 'transDB'

@Injectable({
  providedIn: 'root'
})

export class BitcoinService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  async getRate(val: any) {
    const storage = this.storageService.load(val)
    if (storage) return storage.data
    else {
      const url = `https://blockchain.info/tobtc?currency=USD&value=${val}`
      const res = await axios.get(url)
      this.storageService.save(val, res)
      return res.data
    }
  }

  async getMarketPrice() {
    const priceStorage = this.storageService.load(KeyM)
    if (priceStorage) return priceStorage.data
    else {
      const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
      const res = await axios.get(url)
      this.storageService.save(KeyM, res)
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
      return res
    }
  }
}
