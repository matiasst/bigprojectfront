import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  userForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(userForm) {
    const { username, password } = userForm;

    const success = this.authService.login(username, password);
    if (success) {
      // Redirect to /users if login is successful
      // You can use the Router service for navigation
      this.router.navigate(['/', 'users']);

    } else {
      // Redirect to register if login fails
      // You can use the Router service for navigation
      this.router.navigate(['/', 'register']);
    }
  }

}
