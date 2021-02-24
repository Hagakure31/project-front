import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../service/part/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  infoMessage: string = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService
      .postLoginForm(this.loginForm.value)
      .pipe(
        catchError((error) => {
          return of({
            success: false,
          });
        })
      )
      .subscribe((response) => {
        if (response.success == false) {
          this.infoMessage = 'Email ou mot de passe incorrect';
          this.snackbar.open(this.infoMessage, '', {
            duration: 3000,
            panelClass: ['fail-snackbar'],
          });
        } else {
          this.router.navigate(['home']);
        }
      });
  }
}
