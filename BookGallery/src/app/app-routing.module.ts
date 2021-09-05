import { BookEntryComponent } from './book-entry/book-entry.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBookComponent } from './search-book/search-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookDetailComponent } from './home/all-books/book-detail/book-detail.component';
import { AllBooksComponent } from './home/all-books/all-books.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'bookentry', component:BookEntryComponent
  },
  {path:'searchBook', component:SearchBookComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'bookdetails', component: BookDetailComponent},
  {path:'AllBooks', component:AllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
