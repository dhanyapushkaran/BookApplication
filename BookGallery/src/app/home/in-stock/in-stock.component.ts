import { Component, OnInit , Input} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-in-stock',
  templateUrl: './in-stock.component.html',
  styleUrls: ['./in-stock.component.css']
})
export class InStockComponent implements OnInit {
  uid: any
  inStocks: any = []
  @Input() item:string | undefined
  
  constructor(public ds: DataService) {

    this.uid = localStorage.getItem("currentAcc")
    this.ds.instock(this.uid)
      .subscribe((result: any) => {
        if (result) {
          console.log(result)
          this.inStocks = result.instocks
          console.log(this.inStocks)

        }

      }, result => {
        alert(result.error.message)
      })
   }

  ngOnInit(): void {
  }
}