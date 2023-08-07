import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartContractService {

  private apiUrl = 'http://localhost:3000/api/achievement'; 

  constructor(private http: HttpClient) { }

  hashDocument(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/hashContract`, formData);
  }

  compareHashWithDatabase(hash: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/compareHash`, { hash });
  }

}
