import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Book } from '../models/book.model';
import { DataService } from '../service/data.service';
import * as data from '../assets/books.json'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authenticated : boolean = this.authService.isAuthenticated()
  books: any = this.dataService.getAllBooks()
  filteredBooks: any = this.books
  inputField: string = ''
  menu: boolean = true

  constructor(private router: Router, private authService: AuthService, private dataService: DataService){}

  onInit(){
    this.authenticated = this.authService.isAuthenticated()
    this.filteredBooks = this.books
  }

  onBookClick(book: any){
    this.dataService.getBook(book.id)
    this.router.navigate(['/book', book.id])
  }

  onSearch(){
    if(this.inputField !== ''){
      this.filteredBooks = this.books.filter((book: any) => {
        return book.name.toLowerCase().includes(this.inputField.toLowerCase()) || book.author.toLowerCase().includes(this.inputField.toLowerCase())
      })
    }else{
      this.filteredBooks = this.books
    }
  }

  onLoginIn(){
    this.router.navigate(['/signin'])
  }

  onMenuClick(){
    this.menu = !this.menu
  }

}
