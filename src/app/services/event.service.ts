import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  uri = environment.url;
  private refresh = new Subject<void>
 
 get isrefrshrequired(){
   return this.refresh
 }
  constructor(private http: HttpClient) { }

  addEvent(eventData: any){
    return this.http.post(`${this.uri}`,eventData).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }

  getEvents(){
    return this.http.get(`${this.uri}getevents`);
  }

  deleteEvent(eventId: any) {
    return this.http.delete<any>(`${this.uri}${eventId}`).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }

  updateEvent(data:any) {
    return this.http.put<any>(`${this.uri}${data.id}`, data).pipe(tap(()=>{
      this.isrefrshrequired.next()
    }))
  }
}
