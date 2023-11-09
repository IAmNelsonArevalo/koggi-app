import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../../../controllers/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm;

  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
        email: new FormControl('email', [Validators.required, Validators.email]),
        password: new FormControl('password', [Validators.required]),
    })
  }

  handleLogin() {
    this.http.post(`${environment.baseUrl}/auth/login`, this.loginForm.value).subscribe((res) => console.log(res));
  }
}
