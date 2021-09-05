import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { of } from 'rxjs';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  sBook: any = []
  outstocks: any = []
  instocks: any = []


  constructor(private http:HttpClient) { }

  register(uid:any,uname:any,pswd:any){
    const data={
      uid,uname,pswd
    }
    return this.http.post('http://localhost:3000/register',data, options)
  }
  logout(){
    return this.http.post('http://localhost:3000/logout', options)
  }

  login(uid: any, pswd: any) {
    const data={
      uid,pswd
    }

    return this.http.post('http://localhost:3000/login', data, options)
  }


  searchBook(bname: any) {
    console.log(bname)
    
   const data = {bname}

    return this.http.post('http://localhost:3000/home', data,options)

    // let bookDetails = this.users
    // for (let book of bookDetails) {
    //   if (book["bookname"] == bname) {
    //     this.sBook.push(book)
    //     console.log(this.sBook);

    //     return this.sBook
    //   }
    // }

  }


  outStockBooks(uid:any) {
    const data={uid}
    return this.http.post('http://localhost:3000/outstock',data, options)
    // let bookDetails = this.users
    // for (let book of bookDetails) {
    //   if (book["no_copies"] == book["sold"]) {
    //     this.outstocks.push(book)

    //   }
     

    // }
    // return this.outstocks
  }

  instock(uid:any) {
    const data={uid}
    return this.http.post('http://localhost:3000/instock', data, options)
    // let bookDetails = this.users
    // for (let book of bookDetails) {
    //   if ((book["no_copies"]- book["sold"])> 0) {
    //     this.instocks.push(book)
        
        
    //   }
    //   console.log(this.instocks);
    // }
    // return this.instocks

  }

  bookentry(bookname:any,author:any,price:any,no_copies:any,image:any){
    const data= {
      bookname,author,price,no_copies,image
    }
    console.log(data)
    
    return this.http.post('http://localhost:3000/addBook',data, options)
  }


  viewBooks(uid:any){
    const data={uid}
    return this.http.post('http://localhost:3000/viewBooks',data, options)
  }
}

