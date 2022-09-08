import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MathQuestionDTO } from '../helper/dto/mathQuestionDTO';
import { Restdata } from '../helper/restdata';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class MathServiceService {

  constructor(private http: HttpClient, private router: Router, private restData: Restdata) { }

  private handleError(error: Response) {
    console.error(error);
    return throwError(error.text);
  }

  public PostQuestion(mathQuestionDTO: MathQuestionDTO) {
    return (this.http.post<any>(this.restData.getUrl('mathapi/postQuestion'), mathQuestionDTO,
    )).pipe(catchError(this.handleError));
  }

  public GetAllQuestionAnswers(){
    return (this.http.get<any>(this.restData.getUrl('mathapi/getQuestionAnswers'))).pipe(catchError(this.handleError));
  }
  
}
