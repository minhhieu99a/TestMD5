import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookCreateComponent} from '../book-create/book-create.component';
import {BookListComponent} from '../book-list/book-list.component';
import {BookDeleteComponent} from '../book-delete/book-delete.component';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookDetailsComponent} from '../book-details/book-details.component';


@NgModule({
  declarations: [
    BookCreateComponent,
    BookListComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
