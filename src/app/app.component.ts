import { Component, Injectable } from '@angular/core';
import * as CryptoJS from 'node_modules/crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = '';
  result = '';
  showResult = false;
  encryptData(){
    this.result = CryptoJS.AES.encrypt(JSON.stringify(this.msg), 'secret').toString();
    this.showResult = true;
  }
  decryptData(){
    this.result = JSON.parse(CryptoJS.AES.decrypt(this.msg, 'secret').toString(CryptoJS.enc.Utf8));
    this.showResult = true;
  }
}
