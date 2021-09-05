import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  inStocks:any=[]
  @Input() item:string | undefined

  constructor(public ds: DataService) { 
   
  }

  ngOnInit(): void {
    
    console.log(this.item);
    alert(this.item)
    let bookname = this.item
    // console.log(bookname);
    
    this.ds.searchBook(bookname)
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

}
