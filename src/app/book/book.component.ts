import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  bookId: string | null = null
  book: any = null

  constructor(private routes : ActivatedRoute, private dataService : DataService){}

  ngOnInit(){
    this.bookId = this.routes.snapshot.paramMap.get('id')
    this.book = this.dataService.getBook(Number(this.bookId))[0]
  }

  onBookReturn(){
    if(this.book.available < this.book.total && this.book.available >= 0){
      this.book.available += 1
    }else{
      alert('Book quantity reached the limit')
    }
  }

  onBookBorrow(){
    if(this.book.available > 0){
      this.book.available -= 1
    }else{
      alert('Book not available')
    }
  }
}
