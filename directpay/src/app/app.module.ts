import { MakePaymentComponent } from './payment/make-payment.component';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './../../../../AngularWork/App/src/app/app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentService } from './payment/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    MakePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
