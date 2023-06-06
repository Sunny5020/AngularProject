import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR_PROJECT';


  firstName : string = 'sunny';
  firstName1 ='sunny';
  firstName2! :string;
  surName2 : any;
  surName : any = true;
  formTitle : string ='Login Form...';
  studentName ='om';
  amount = 500;
  myName = 'Sunny';
  gender = false;
  isDisabled = true;
  eventBindingData=60000;
  twoWayBindingTest=2000;
  testingInterpolation(){
    return 'testing function interpolation';
}

testingEventBinding(){
  this.eventBindingData= 50000;
  console.log( this.eventBindingData= 50000 );
  
}
test(){
  this.twoWayBindingTest;
  console.log(this.twoWayBindingTest);
  
}
 
}

