import { analyzeNgModules } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: any
  aim = "books"
  loginForm = this.fb.group({
    bname: ['']
  })
  bookName:any
  author = ""
  price = ""
  image = ""
  searchOptions = ["Select Option", "Books OutOfStock", "Books InStock"]
  selectValue = ""
  inStocks: any = []
  book: any = []
  id: any
  uid:any
  instockId:any
  outstockId:any

  constructor(public ds: DataService, public fb: FormBuilder, public activatedRoute: ActivatedRoute) {
    this.userName = localStorage.getItem("userName")
  }

  viewBooks() {
    this.id = localStorage.getItem("currentAcc")
  }

  loggedin() {
    return localStorage.getItem("currentAcc")
  }

  logout() {
    localStorage.removeItem("currentAcc")
    localStorage.removeItem("userName")
    this.ds.logout()
  }

  outStock() {
    this.outstockId = localStorage.getItem("currentAcc")
   
  }
  inStock() {
    this.instockId = localStorage.getItem("currentAcc")
  
  }

  searchBook() {
 
     this.bookName = this.loginForm.value.bname
    
     
    this.ds.searchBook(this.bookName)
      .subscribe((result: any) => {
        if (result) {
          console.log(result.book);

          this.inStocks.push(result.book)
          //this.inStocks= result.book

          //  this.book= [{result.book.author, result.book.bookname,result.book.image}]
          // this.author = result.book.author
          // this.bookname = result.book.bookname
          // this.price = "Rs." + result.book.price
          // this.image = result.book.image
          console.log(this.inStocks)

        }
      }, result => {
        alert(result.error.message)
      })


  }

  // onSelectOption(val: any) {
  //   this.selectValue = val.target.value
  //   console.log(this.selectValue);

  //   if (this.selectValue == this.searchOptions[1]) {
  //     let result = this.ds.outStockBooks()
  //     console.log(result);
  //     if (!(result)) {

  //       alert("No OutOfStock Books")

  //     }
  //     else {
  //       this.inStocks = result
  //      

  //   }
  //   else if (this.selectValue == this.searchOptions[2]) {
  //     let result = this.ds.instock()
  //     console.log(result);
  //     if (!(result)) {

  //       alert("Books OutOfStock")

  //     }
  //     else {
  //       this.inStocks = result
  //      

  //     }
  //   }


  // }

  ngOnInit(): void {
    
  }
}