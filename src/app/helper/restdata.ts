import {HttpHeaders} from "@angular/common/http";

export class Restdata {

//voor nu nog even localhost
//  private url = 'http://localhost:5001/';
private url = 'http://localhost:5001/'


        
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5001/',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  public getUrl(keyword: string): string {
    return this.url + keyword + '/';
  }

}