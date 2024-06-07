import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  password: string = '';
  confirmPassword: string = '';
  submitDisabled: boolean = true;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<ChangePasswordComponent>) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  enableSubmitButton() {
    this.submitDisabled = false;
  }

  disableSubmitButton() {
    this.submitDisabled = true;
  }

  validateSignupForm() {
    if (this.validatePassword()) {
      // Save passwords to the form
      this.changePasswordForm.controls['password'].setValue(this.password);
      this.changePasswordForm.controls['confirmPassword'].setValue(this.confirmPassword);

      // Log the form value
      console.log('Form value:', this.changePasswordForm.value);

      // Close the dialog
      this.closeDialog();
    } else {
      this.errorMessage = 'Passwords do not match. Please try again.';
    }
  }

  validatePassword(): boolean {
    return this.password === this.confirmPassword;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onPasswordChange() {
    this.updateErrorMessage();
    if (this.password !== '' && this.confirmPassword !== '' && this.password === this.confirmPassword) {
      this.enableSubmitButton();
    } else {
      this.disableSubmitButton();
    }
  }

  onConfirmPasswordChange() {
    this.updateErrorMessage();
    if (this.password !== '' && this.confirmPassword !== '' && this.password === this.confirmPassword) {
      this.enableSubmitButton();
    } else {
      this.disableSubmitButton();
    }
  }

  private updateErrorMessage() {
    if (this.password !== '' && this.confirmPassword !== '' && this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please try again.';
    } else {
      this.errorMessage = '';
    }
  }
}
