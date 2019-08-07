import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetUser: User = new User();
  token: string;
  resetForm: FormGroup;
    constructor(public FormBuilder: FormBuilder,private snackBar:MatSnackBar,private userService: UserService,private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit() {
  
      this.resetForm = this.FormBuilder.group(
        {
          'password': new FormControl(this.resetUser.password, [Validators.required, Validators.minLength(6)]),
          'confirmPassword': new FormControl(this.resetUser.confirmPassword,[Validators.required,Validators.minLength(6)])
        }
      )
        this.token=this.route.snapshot.paramMap.get('token');
          
    }
  
    onReset(){
      console.log("reset");
      console.log(this.token+""+this.resetUser.password+""+this.resetUser.confirmPassword);
      if (this.resetUser.password != this.resetUser.confirmPassword) throw "Password and Confirm Password does not match";
      if (this.resetUser.password === '' || this.resetUser.confirmPassword === '') throw "Empty fields";
      this.userService.sendResetLink(this.token ).subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            console.log(response);
            this.snackBar.open(
              "Password reset Successfully",
              "undo",
              { duration: 2500 }
            )
          } else {
            console.log(response);
            this.snackBar.open(
              "Password reset Failed",
              "undo",
              { duration: 2500 }
            )
          }
        }
      )
    }
  
  }
  
  
  

