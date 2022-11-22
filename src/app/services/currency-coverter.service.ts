import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable } from 'rxjs';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyCoverterService {
  baseUrl = environment.base_url;

  constructor(private http: HttpClient, private router: Router) {}

  GetMethod(Api_Name: any, params?: any): Observable<any> | Observable<[]> {
    let headers = new HttpHeaders();
    if (!params) {
      return this.http.get<any>(this.baseUrl + Api_Name).pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error): any => {
          return this.MyThrowError(error);
        })
      );
    }
    //here is the condition needed if the called get method api has to get specific data with a selected row
    else {
      return this.http.get<[]>(this.baseUrl + Api_Name + '/' + params).pipe(
        map((data: any) => {
          return data;
        }),
        catchError((error): any => {
          return this.MyThrowError(error);
        })
      );
    }
  }


   MyThrowError(error: any): any {
    console.log(error);
    if (error.status == 400) {
      for (const key in error.error) {
        for (let i of error.error[key]) {
          if (i == 'Unable to log in with provided credentials.') {
            return throwError(
              () => new Error('خطأ في كلمة المستخدم أو كلمة المرور')
            );
          }
          return throwError(() => new Error(i));
        }
      }
    } else if (error.status == 500) {
      return throwError(() => new Error('خطأ في الاتصال بالسيرفر'));
    } else if (error.status == 404) {
      return throwError(() => new Error('لم يتم العثور على بيانات'));
    } else if (error.status == 405) {
      return throwError(() => new Error('غير مسموح'));
    } else if (error.status == 0) {
      return throwError(() => new Error('خطأ في الاتصال بالإنترنت '));
    } else if (error.status == 401) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return throwError(() => new Error('يرجى اعادة تسجيل الدخول'));
    } else {
      return throwError(() => new Error(error.statusText));
    }
  }
}
