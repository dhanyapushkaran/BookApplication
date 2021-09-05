import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book:any
  bookDetails:any=[]
 @Output() passBookName = new EventEmitter
 item: any
 uid:any
  constructor(public router:Router, public activatedRoute: ActivatedRoute, private ds:DataService) {
   
   }

  
  ngOnInit(): void {

   this.activatedRoute.params
      .subscribe((result:any) =>{
      console.log(result);
       this.book=result.book

       this.ds.searchBook(this.book)
      .subscribe((result: any) => {
        if (result) {
          console.log(result.book);
          
          this.bookDetails.push(result.book)
         this.item=this.bookDetails.bookName
          console.log(this.bookDetails)

        }
      }, result => {
        alert(result.error.message)
      })

       
      })

      
  }
  passItem(){
    this.uid= localStorage.getItem("currentAcc")
  }
}
