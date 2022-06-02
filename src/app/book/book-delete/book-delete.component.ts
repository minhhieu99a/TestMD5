import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private bookService: ServiceService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramap) => {
const id = paramap.get('id');
this.deleteCity(id);
    });
  }

  ngOnInit() {
  }
  deleteCity(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.removeBook(id) .subscribe(() => {
          this.router.navigate(['/books']);
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );

      } else {
        this.router.navigate(['/books']);
      }
    });
  }
}
