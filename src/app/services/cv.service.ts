import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CV } from '../models/cv.model';
import { Observable, catchError, of, tap } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/cvs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CV[]> {
    return this.http.get<CV[]>(baseUrl);
  }

  get(id: any): Observable<CV> {
    return this.http.get<CV>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  update(id: any,data: any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNom(nomComplet: any): Observable<CV[]> {
    return this.http.get<CV[]>(`${baseUrl}?nomComplet=${nomComplet}`);
  }
  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
