import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  load(key: string) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
  }

  save(key: string, val: any) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
  }
}
