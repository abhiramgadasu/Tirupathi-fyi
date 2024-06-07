import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  errorMessage: string = '';

  constructor(private loginService: LoginServiceService, private router: Router) { }

  login = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    if (this.loginService.isLogin()) {

      const token = this.loginService.getToken();
      if (token) {
        this.loginService.setToken(token);
      }
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    if (form.valid) {
      let payload ={
        ...form.value,  
        role:"Admin",
        isLogin:"yes"
      }
      console.log(payload);
      
      this.loginService.login(payload).subscribe(
        (res: any) => {
          sessionStorage.setItem('id',res.response.id)
          if (!res.error) {
            this.loginService.setToken(res.response.token);
            this.router.navigate(['/home']);
          } 
        },
        (error) => {
          console.error('Login failed:', error);
          this.errorMessage = error.error.error
        }
      );
    }
  }
}
