import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get formControls() { return this.forgotPasswordForm.controls; }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      // Simulate sending a reset link
      console.log('Reset link sent to:', this.forgotPasswordForm.value.email);
      // Navigate to reset password page (simulate step)
      this.router.navigate(['/reset-password']);
    }
  }
}
