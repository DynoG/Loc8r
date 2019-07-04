import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formError: string = '';
  
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public pageContent = {
    header: {
      title: 'Create a new account',
      strapline: ''
    },
    sidebar: ''
  };

  @Input() ngValue: any;
  constructor(
    private router: Router,
  private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
