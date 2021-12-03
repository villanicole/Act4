import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firstname = new FormControl ('');
  lastname = new FormControl ('');
  birthdate = new FormControl ('');
  birthplace = new FormControl ('');
  email = new FormControl ('');


  constructor() { }

  ngOnInit() {
  }

}
