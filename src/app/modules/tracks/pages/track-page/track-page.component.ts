import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable, Subscription } from 'rxjs';
import { TracksModel } from '../../../../core/models/tracks.model';


@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  mockList: Array<TracksModel>=[];

  tracksTrending: Array<TracksModel>=[];
  tracksRandom: Array<TracksModel>=[];

  listObservables$ : Array<Subscription> = [];

    constructor( private trackService: TrackService) { }

  ngOnInit(): void {
    
    const observer1$ = this.trackService.dataTracksTrading$
      .subscribe( response => {
        this.tracksTrending = response
      })

      this.listObservables$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservables$.forEach( u => u.unsubscribe());

  }

}
