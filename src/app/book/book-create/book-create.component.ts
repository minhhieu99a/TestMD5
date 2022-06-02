import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: ServiceService) {
  }

  ngOnInit() {
  }

  createNewBook() {
    const book = this.bookForm.value;
    this.bookService.createNewBook(book).subscribe(() => {
      alert('Tạo thành công');
    });
    this.bookForm.reset();
  }
}
