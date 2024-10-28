import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CommonRequest, GetAllMakesModel, ModelsForMakeIdYearModel, ResponseResult, TypesForMakeModel } from '../Models/models';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarCompassSearchService {
  private apiUrl = environment.apiUrl + 'api/Vehicle/';
  private httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('content-type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  GetAllMakes(searchObj: CommonRequest): Observable<ResponseResult<GetAllMakesModel>> {
    let url = this.apiUrl + "GetAllMakes"
    return this.http.post<ResponseResult<GetAllMakesModel>>(url, searchObj, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          return of(err);
        }) 
      );
  }

  GetVehicleTypesForMakeId(searchObj: CommonRequest): Observable<ResponseResult<TypesForMakeModel>> {
    let url = this.apiUrl + "GetVehicleTypesForMakeId"
    return this.http.post<ResponseResult<TypesForMakeModel>>(url, searchObj, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          return of(err);
        })
      );
  }

  GetModelsForMakeIdYear(searchObj: CommonRequest): Observable<ResponseResult<ModelsForMakeIdYearModel>> {
    let url = this.apiUrl + "GetModelsForMakeIdYear"
    return this.http.post<ResponseResult<ModelsForMakeIdYearModel>>(url, searchObj, { headers: this.httpHeaders, responseType: 'json' })
      .pipe(
        catchError(err => {
          return of(err);
        })
      );
  }
}
