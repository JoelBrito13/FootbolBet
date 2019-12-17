import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from './_models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://jeanbrito.pythonanywhere.com/users/';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  login(username, password): Observable<JSON> {
    const url = this.baseUrl + 'login/';
    console.log(url)
    const user = {'username': username, 'password': password};
    console.log('user')
    console.log(user)
    return this.http.post<JSON>(url, {'username': username, 'password': password}, httpOptions).pipe(catchError(this.handleError));
  }

  getUser(token: string): Observable<User> {
    const url = this.baseUrl;
    // httpOptions.headers.set('Authorization', token);
    const httpOptions2 = {
      headers: new HttpHeaders({
        Authorization: 'Token ' + token['token']
      })
    };
    return this.http.get<User>(url, httpOptions2);
  }
}
