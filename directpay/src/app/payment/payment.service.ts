

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DirectPay } from '../models/directpay.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PaymentService {

  constructor(private http:HttpClient) { }

  private directpayUrl1 = 'http://localhost:8090/accidentClaimmodule/accidentClaim/create';
  private directpayUrl = 'http://localhost:8090/accidentClaimmodule/accidentClaim/list';
 
  public getPayments() {

    alert("list of payments");
    
    return this.http.get<DirectPay[]>(this.directpayUrl);
  }

  public makePayment(DirectPay) {

  
    return this.http.post<DirectPay>(this.directpayUrl1, DirectPay);
  }

}
