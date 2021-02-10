import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    if (localStorage.getItem('currentUser') !== null) 
      this.router.navigate(['/home']);
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    
    if(this.authService.login(this.loginForm.value.email, this.loginForm.value.password)){
      this.loginForm.reset();
      this.router.navigate(['/']);
    }
    
  }

}
