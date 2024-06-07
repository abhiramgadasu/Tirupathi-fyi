import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  uri = environment.url;
  private refresh = new Subject<void>
  get isrefrshrequired() {
    return this.refresh
  }
  constructor(private http: HttpClient) { }

  getAllCompanies(){
    return this.http.get(`${this.uri}getcompanies`);
  }

  getCompanyById(id: string){
    return this.http.get(`${this.uri}getcompanies/${id}`);
  }

  createCompany(companyData: any){
    return this.http.post(`${this.uri}postcompanies`, companyData).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }

  updateCompany(id: string, companyData: any){
    return this.http.put(`${this.uri}updatecompanies/${id}`, companyData).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }

  deleteCompany(id: string){
    return this.http.delete(`${this.uri}deletecompanies/${id}`).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }
}
