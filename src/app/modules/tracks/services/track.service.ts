import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TracksModel } from '../../../core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrading$: Observable<TracksModel[]> = of([]);
  dataTracksRandom$: Observable<TracksModel[]> = of([]);

  constructor() {
     const { data }:any = (dataRaw as any).default;
     this.dataTracksTrading$ = of(data);

  }
}
