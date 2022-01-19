import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TracksModel } from '../../../core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  dataTracksTrading$: Observable<TracksModel[]> = of([]);
  dataTracksRandom$: Observable<TracksModel[]> = of([]);

  constructor( private http: HttpClient) { }

  getAllTracks$ (): Observable<any> {
    //devuelve un objeto con el array dentro{data:[ track1, track2]} solo queremos el array usamos pipe
     return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any)=>{
          return dataRaw.data
        }),
        catchError( err =>{ //manejo del error
          const { status, statusText } = err
          console.log('algo paso', [status, statusText]);
          
          return of([])
        })
      )
  }

  getAllTracksRandom$ (): Observable<any> {
    //devuelve un objeto con el array dentro{data:[ track1, track2]} solo queremos el array usamos pipe
     return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any)=>{
          return dataRaw.data.reverse()
        })
      )
  }

}
