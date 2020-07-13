import { AnswersPostObject } from './../requestObjects/AnswersPostObject';
import { Survey } from './../entities/Survey';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../entities/Answer';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http:HttpClient) { }

  httpOtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'responseType': 'json'
    })
  }

  getResult(id: string): Observable<Survey> {
    return this.http.get<Survey>("http://localhost:8080/survey/" + id);
  }

  postAnswer(answers: AnswersPostObject): Observable<String> {
    return this.http.post<String>("http://localhost:8080/postAnswer", answers, this.httpOtions);
  }

}
