import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
uid:any
books:any=[]
bookName:any

@Input() item:string | undefined
  constructor(private db: DataService, private router:Router) {
  
    // this.uid=localStorage.getItem("currentAcc")

      this.db.viewBooks(this.uid)
        .subscribe((result: any) => {
          if (result) {
           
           this.books=result.books
            console.log(this.books);
            

          }

        }, result => {
          alert(result.error.message)
        })

    
  }

  passName(bookName:any){
 this.bookName= bookName
 this.router.navigate(['bookdetails', {book: this.bookName }])
  }
  ngOnInit(): void {
  }

}
