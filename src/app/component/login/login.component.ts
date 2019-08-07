import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  userLogin:User = new User();
  loginForm:FormGroup;
  token:string
  emailId:string
  constructor(public formBuilder: FormBuilder,private snackBar: MatSnackBar,private userService:UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'emailId': new FormControl(this.userLogin.emailId, Validators.required),
        'password': new FormControl(this.userLogin.password, [Validators.required, Validators.minLength(6)])
    })
  }

  onLogin(){
    console.log(this.userLogin);
  

    this.userService.userLogin(this.userLogin).subscribe(
      (response: any) => {console.log(response);
        if (response.statusCode == 200) {
          console.log(response);

          localStorage.setItem("token",response.token);
     
          this.router.navigate(['/dashboard'])
          this.snackBar.open(
            "Login Successfully",
            "undo",
            { duration: 2500 }
          )
          this.router.navigate(['/dashboard'])
        } else {
          console.log(response); 
          this.snackBar.open(
            "Login Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  
}}



