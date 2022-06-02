import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = {};
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
      this.book = book;
    });
  }
}
