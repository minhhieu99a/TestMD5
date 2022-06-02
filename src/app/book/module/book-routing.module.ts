import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from '../book-list/book-list.component';
import {BookCreateComponent} from '../book-create/book-create.component';
import {BookDeleteComponent} from '../book-delete/book-delete.component';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {BookDetailsComponent} from '../book-details/book-details.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'create',
    component: BookCreateComponent,
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent,
  },
  {
    path: 'edit/:id',
    component: BookEditComponent,
  },
  {
    path: 'detail/:id',
    component: BookDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
