import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/behavior/toast/toast.service';
import { Toaster } from 'src/app/models/toaster';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  users=[
    {
      email:"ahmed.bhouri@gmail.com",
      password:"Pass2021"
    }
  ]

  constructor(private _toastService: ToastService, private _router: Router) { }


  user={
    email:{
      value:"ahmed.bhouri@gmail.com",
      valid:false
    },
    pass:{
      value:"Pass2021",
      valid:false
    },
    valid:false
  }

  ngOnInit(): void {
  }

  searchUser(email:string,pass:string){
    let user = this.users.find((element)=>{
      return element.email == email
    })
    if(user){
      if(user.password == pass){
        return true
      }
    }
    return false
  }

  logIn(){
    if(this.user.valid){
      if(this.searchUser(this.user.email.value,this.user.pass.value)){
        let toast: Toaster = {
          id: '_' + Date.now().toString(),
          message: "Logged In Suvvessfully",
          type: "success",
          duration: 1,
        }
        this._router.navigate(['/forum'])
        this._toastService.Add(toast)
      }else{
        let toast: Toaster = {
          id: '_' + Date.now().toString(),
          message: "wrong email or password",
          type: "error",
          duration: 1,
        }
        this._toastService.Add(toast)
      }
    }
  }

  change(input){
    const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pass_re = /.{8,}/;
    if(input.target.id == "email"){
      this.user.email.value = input.target.value.toLowerCase();
      this.user.email.valid =  email_re.test(this.user.email.value);
    } else if(input.target.id == "pass"){
      this.user.pass.value = input.target.value;
      this.user.pass.valid =  pass_re.test(this.user.pass.value);
    }
    this.user.valid = (this.user.pass.valid && this.user.email.valid);
  }

}
