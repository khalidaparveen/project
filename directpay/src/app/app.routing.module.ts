import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment/payment.component';
import {MakePaymentComponent} from './payment/make-payment.component';


const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'makepayment', component: MakePaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
