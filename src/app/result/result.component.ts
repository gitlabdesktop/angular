import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
//   styleUrls: ['./result.component.css']
})
  
export class ResultComponent {
  

  fname = localStorage.getItem('firstname');
  // address = localStorage.getItem('address');
  contact = localStorage.getItem('contact');
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');

  onlogout(){
  localStorage.clear();

  }
  

}

