import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit { 
  firstname = new FormControl('');
  lastname = new FormControl ('');
  email = new FormControl ('');
  createpassword = new FormControl ('');
  confirmpassword = new FormControl ('');
  constructor() { }

  ngOnInit() {
  }

}
