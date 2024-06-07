import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  uri = environment.url;
  private refresh = new Subject<void>
  get isrefrshrequired() {
    return this.refresh
  }
  constructor(private http: HttpClient) { }

  createPlace(placeData: any) {
    return this.http.post(`${this.uri}postplaces`, placeData).pipe(tap(() => {
      this.isrefrshrequired.next()
    }));
  }
  getPlaces() {
    return this.http.get(`${this.uri}getplaces`);
  }
  updatePlace(id: string, placeData: any) {
    return this.http.put(`${this.uri}places/${id}`, placeData).pipe(tap(() => {
      this.isrefrshrequired.next()
    })); // Corrected endpoint
  }

  deletePlace(id: string) {
    return this.http.delete(`${this.uri}places/${id}`).pipe(tap(() => {
      this.isrefrshrequired.next()
    }))
  }
}
