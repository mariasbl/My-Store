import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from '../_services/app-state.service';

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
  continuePurchase = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private appStateService: AppStateService
  ) {
    if (localStorage.getItem('currentUser') !== null)
      this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.continuePurchase = this.appStateService.getUrl() === '/cart';
    this.appStateService.setUrl('/login');
  }

  onSubmit(): void {

    this.loading = true;

    if (this.authService.login(this.loginForm.value.email, this.loginForm.value.password)) {
      this.loginForm.reset();

      if (this.continuePurchase) {
        setTimeout(() => { this.loading = false }, 800);
        setTimeout(() => { this.router.navigate(['/checkout']) }, 800);
      } else {
        setTimeout(() => { this.loading = false }, 800);
        setTimeout(() => { this.router.navigate(['/']) }, 800);
      }

    }

  }

}
