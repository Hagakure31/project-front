import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RegisterService } from '../service/part/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  infoMessage: string = '';

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(50),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const form = {
      email: this.registerForm.get('email').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
    };
    console.log(form);
    this.registerService.postRegisterForm(form).subscribe((response) => {
      if (response.boolean === true) {
        this.infoMessage = 'Compte crée avec succès. Veuillez vous connecter.';
        this.snackbar.open(this.infoMessage, '', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      } else {
        this.infoMessage = "L'email est déjà utilisé";
        this.snackbar.open(this.infoMessage, '', {
          duration: 3000,
          panelClass: ['fail-snackbar'],
        });
      }
    });
  }
}
