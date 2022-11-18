import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  user = {
    email: '',
    pass: ''
  }

  login(){
    this.authService.login(this.user)  
    .subscribe({
      next: (res) => {
        console.log("res=>", res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.user_id);
        this.router.navigate(['transfers-list']);
      },
      error: (e) => console.log("E=>", e.error)
    });
  }


}
