import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registerForm= this.fb.group({
 uid:[''],
 uname:[''],
 pswd:['']
  })

  constructor(private ds:DataService, private fb:FormBuilder) {  }

  ngOnInit(): void {
  }

  register(){
    let uid= this.registerForm.value.uid
    let uname= this.registerForm.value.uname
    let pswd= this.registerForm.value.pswd
     console.log(uid,uname,pswd)
    this.ds.register(uid,uname,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    }, result=>{
      alert(result.error.message)
    })
      
  }
}
