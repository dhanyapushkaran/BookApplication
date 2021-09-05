import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './home/all-books/all-books.component';
import { BookDetailComponent } from './home/all-books/book-detail/book-detail.component';
import { InStockComponent } from './home/in-stock/in-stock.component';
import { OutstockComponent } from './home/outstock/outstock.component';
import { SearchBookComponent } from './home/search-book/search-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookEntryComponent,
    LoginComponent,
    RegisterComponent,
    AddBookComponent,
     AllBooksComponent,
    BookDetailComponent,
    InStockComponent,
    OutstockComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
