import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @param url
   * @returns
   */
  get(url: string): Observable<IResponse<any>> {
    return this.http.get<IResponse<any>>(url)
  }
  /**
   *
   * @param url
   * @param param
   * @returns
   */
  getWithParam(url: string, param?: any): Observable<any> {
    return this.http.get(url, { params: param })
  }

  getList<T>(url: string, param?: any): Observable<IResponse<T[]>> {
    return this.http.get<IResponse<T[]>>(url, { params: param })
  }
  /**
   * 
   * @param url 
   * @param param 
   * @param header 
   * @returns 
   */

  getWithHeader(url: string, param?:any,header?:HttpHeaders): Observable<any> {
    return this.http.get<any>(url, { params: param , headers:header})
  }
  /**
   * @param url  API Url for get Request
   * @param param
   * @param body object data for create Request
   * @returns
   */
  post<T>(url: string, body: any, param?: any): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(url, body,{ params: param})
  }

  /**
   * 
   * @param req 
   * @returns 
   */
  request(req:any): Observable<any> {
    return this.http.request<any>(req)
  }

  postWithHeader<T>(url: string, body: any,param?:any,header?:HttpHeaders): Observable<IResponse<T>> {
    return this.http.post<IResponse<any>>(url, body, {params:param,headers:header})
  }
  /**
   * @param url API Url for get Request
   * @param body object data for create Request
   * @returns
   */
  update<T>(url: string, body: any,param?:any): Observable<IResponse<any>> {
    return this.http.put<IResponse<T>>(url, body,{params:param})
  }

  /**
 * @param url API Url for get Request
 * @param body object data for create Request
 * @returns
 */
  patch<T>(url: string, body: any,param?:any): Observable<IResponse<T>> {
    return this.http.patch<IResponse<T>>(url, body,{params:param})
  }
  /**
   *
   * @param url
   * @returns
   */
  delete<T>(url: string,param:any): Observable<IResponse<T>> {
    return this.http.delete<IResponse<T>>(url,{params:param})
  }
}
