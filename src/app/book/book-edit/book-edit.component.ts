import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  id: number;

  constructor(private bookService: ServiceService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramap) => {
      this.id = + paramap.get('id');
      this.getBookByid(this.id);
    });
  }

  ngOnInit() {
  }

  getBookByid(id) {
    return this.bookService.findById(id).subscribe((book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  updateBook(id) {
    const book = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('Sửa thành công');
      this.router.navigate(['/books']);
    });
  }
}
