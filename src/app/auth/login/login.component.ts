import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AccessEnum } from '../../dashboard/enums/access-params.enum';
import { LoaderComponent } from '../../loader/loader.component';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  maxLengthEmail = 100;
  minLengthPass = 8;
  isValidAccount = true;
  errorMessage = '';
  public showLoader = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(this.maxLengthEmail), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.minLengthPass)])
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password')
  }

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) { };


  onSubmit() {

    if (!this.loginForm?.valid) return;

    const email = this.email?.value ?? '';
    const pass = this.password?.value ?? '';

    this.validateData(
      email,
      pass
    );



  }


  validateData(email: string, pass: string) {

    this.showLoader = true;
    this.isValidAccount = true;

    this.authService.login(email, pass)
      .pipe( finalize(() => this.showLoader = false) )
      .subscribe({
        next: (res) => {
          console.log(res);
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userInfo', JSON.stringify({
            email: res.email,
            firstName: res.firstName,
            lastName: res.lastName
          }));
          sessionStorage.setItem(AccessEnum.Dashboard, AccessEnum.DashboardParam)

          this.router.navigate(['/dashboard'])


        },
        error: (error) => {

          if (error?.status !== 400) {
            this.errorMessage = error?.error?.error ?? 'internal_server_error'
          };

          this.errorMessage = 'La dirección de correo electrónico o la contraseña que has introducido no son correctas.';
          this.isValidAccount = false;

        }
      }
      )

  }


}
