import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  createNewBook(data): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books`, data);
  }

  findById(id): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  removeBook(id): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }

  updateBook(id, data): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, data);
  }
}

