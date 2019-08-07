import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registerForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group(
      {
        'firstName': new FormControl(this.user.firstName, [Validators.required]),
        'lastName': new FormControl(this.user.lastName, [Validators.required]),
        'emailId': new FormControl(this.user.emailId, [Validators.required]),
        'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
        'mobileNum': new FormControl(this.user.mobileNum, [Validators.required])
      }
    )
  }


  onRegister() {
    console.log(this.user);
    console.log("Registration");
    this.userService.registerUser(this.user).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log(response);
          this.snackBar.open(
            "Registered Successfully",
            "undo",
            { duration: 2500 }
          )
        } else {
          console.log(response);
          this.snackBar.open(
            "Registration Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }




}
