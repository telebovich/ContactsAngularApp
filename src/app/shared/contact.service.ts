import { Injectable } from '@angular/core';
import { IContact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = './assets/contacts/contacts.json';

  constructor(private http: HttpClient) { }

  getConacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.baseUrl).pipe(
      tap(x => console.log(x)),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    );
  }
}
