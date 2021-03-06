import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: ServiceService) {
  }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe((book) => {
      this.books = book;
    }, (error) => {
      console.log(error);
    });
  }
}
