import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-outstock',
  templateUrl: './outstock.component.html',
  styleUrls: ['./outstock.component.css']
})
export class OutstockComponent implements OnInit {
  uid: any
  inStocks: any = []
  @Input() item:string | undefined
  constructor(public ds: DataService) {
  
   }

  ngOnInit(): void {
    this.uid = localStorage.getItem("currentAcc")
    this.ds.outStockBooks(this.uid)
      .subscribe((result: any) => {
        if (result) {
          console.log(result)
          this.inStocks = result.outstocks
          console.log(this.inStocks)

        }

      }, result => {
        alert(result.error.message)
      })
  }

}
