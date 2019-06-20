import { Injectable } from '@angular/core';
import { IContact } from '../contact-list/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = './api/contacts/contacts.json';

  constructor(private http: HttpClient) { }

  getConacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.baseUrl).pipe(
      tap(x => x),
      catchError(error => {
        console.log(error);
        return Observable.throw(error);
      })
    );
  }
}
