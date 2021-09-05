import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm = this.fb.group({
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  userName=""

  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      var uid = this.loginForm.value.uid
      var pswd = this.loginForm.value.pswd
     this.ds.login(uid, pswd)
     .subscribe((result:any)=>{
      if (result) {
        console.log(result);
        alert(result.message)
        localStorage.setItem("userName", result.userName)
        localStorage.setItem("currentAcc", result.currentAcc)
        this.userName=result.userName
        this.router.navigateByUrl("")
      }
     }, result=>{
       console.log(result.error.message);
       
      alert(result.error.message )
     })
     
    }
  
  }
}
