import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DirectPay } from '../models/directpay.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent {

 

  directpay: DirectPay = new DirectPay();
  constructor(private router: Router, private paymentService: PaymentService) { }

  makePayment(): void {
    this.paymentService.makePayment(this.directpay)
        .subscribe( data => {
          alert("Payment made successfully.");
        });

  };
}






