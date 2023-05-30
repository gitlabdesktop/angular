import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
//    styleUrls: ['./signup.component.css']
})

 export class SignupComponent { 

  signupobj ={
    firstName:'',
    contact:'',
    email:'',
    password:''
  };



  onsignup(){
    localStorage.setItem('firstname',this.signupobj.firstName);
    // localStorage.setItem('lastname',this.signupobj.address);
    localStorage.setItem('contact',this.signupobj.contact);
    localStorage.setItem('email',this.signupobj.email);
    localStorage.setItem('password',this.signupobj.password);
    alert("user registered successfully...!!!");
    location.href = "/login"

  }
}
