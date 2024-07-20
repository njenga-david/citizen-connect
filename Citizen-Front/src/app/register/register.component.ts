// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../auth/auth.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-register',
//   standalone:true,
//   imports:[FormsModule,CommonModule,ReactiveFormsModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//       role: ['', Validators.required]
//     }, {
//       validators: this.passwordMatchValidator
//     });
//   }

//   // Custom validator to check if passwords match
//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password');
//     const confirmPassword = form.get('confirmPassword');
//     if (password && confirmPassword && password.value !== confirmPassword.value) {
//       confirmPassword.setErrors({ passwordMismatch: true });
//     } else {
//       confirmPassword.setErrors(null);
//     }
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       this.authService.register(this.registerForm.value).subscribe(
//         response => {
//           console.log('Registration successful', response);
//           this.router.navigate(['/login']);
//         },
//         error => {
//           console.error('Error registering', error);
//         }
//       );
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
    standalone:true,
  imports:[FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error registering', error);
        }
      );
    }
  }
}
