import { Component } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'razorpay-angular';

  payNow() {
    const RozarpayOptions = {
      description: 'Sample Rozorpay demo',
      currency: 'INR',
      amount: 10000,
      name: 'Sai',
      key: 'rzp_test_W3pHnVCWYA1Ulx',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      prefill: {
        name: 'sai kumar',
        email: 'sai@gmail.com',
        phone: '9898989898',
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        } 
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }
    
    const failureCallback = (e: any) => {
      console.log(e);
  }

  // Rozorpay.open(RozarpayOptions,successCallback, failureCallback)
  Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }
}
