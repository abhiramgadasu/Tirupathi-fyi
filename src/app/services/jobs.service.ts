import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  uri = environment.url;
  private refresh = new Subject<void>
  get isrefrshrequired(){
    return this.refresh
  }
  constructor(private http: HttpClient) {}

  createJob(jobData: any) {
    return this.http.post(`${this.uri}postjobs`, jobData).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }));
  }

  getJobs() {
    return this.http.get(`${this.uri}jobs`);
  }

  updateJob(id: string, jobData: any){
    return this.http.put(`${this.uri}/updatejobs/${id}`, jobData).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }));
  }
  deleteJob(id: string) {
    return this.http.delete(`${this.uri}deletejobs/${id}`).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }
}
