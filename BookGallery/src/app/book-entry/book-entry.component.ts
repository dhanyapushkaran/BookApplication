
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  bookForm = this.fb.group({
    bname: [''],
    author: [''],
    price: [''],
    copies: [''],
    image: ['']
  })

  constructor(private fb: FormBuilder, private db: DataService) { }


  bookentry() {
    let bname = this.bookForm.value.bname
    let author = this.bookForm.value.author
    let price = this.bookForm.value.price
    let copies = this.bookForm.value.copies
    let image = this.bookForm.value.image
    console.log(bname, author, price, copies, image)
    this.db.bookentry(bname, author, price, copies,image)
    .subscribe((result:any)=>{
      if(result){
        console.log(result.newBook);
        
        alert(result.message)
      }
      
    }, result=> {
   alert(result.error.message)
    })
     
  }


ngOnInit(): void {
}
}
