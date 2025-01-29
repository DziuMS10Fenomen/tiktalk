import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);


  public isPasswordVisible:WritableSignal<boolean> = signal(false)
 
  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  });

  onSubmit() {
    this.isPasswordVisible.set(true)
    if (this.form.valid) {
      
      const { username, password } = this.form.value;

      
      this.authService.login({ username: username!, password: password! }).subscribe({
        next: () => {
          
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // Обробка помилок входу (додайте власну логіку)
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
