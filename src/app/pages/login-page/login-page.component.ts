import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  authService = inject(AuthService)
  router: Router= inject(Router)


  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

 

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value); 
      if (this.form.valid){
        //@ts-ignore
      this.authService.login(this.form.value)
      this.router.navigate([''])
      }
    }
  }
}
