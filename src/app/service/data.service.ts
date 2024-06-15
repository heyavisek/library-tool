import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as data from '../assets/books.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  books: any = (data as any).default

  getAllBooks(): any {
    return this.books
  }

  getBook(id: number): any {
    return this.books.filter((b: any) => {
      if (b.id == id) {
        return b
      }
    })
  }

  returnBook(id: number){
    const item = this.books.filter((b: any) => b.id === id)
    item.name = 'Returned'
  }
  

}
