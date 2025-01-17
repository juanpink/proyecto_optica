import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  store(key : string, infor : string) {
    localStorage.setItem(key, infor);
  }

  retrieve(key : string) {
    return localStorage.getItem(key);

  }

}
