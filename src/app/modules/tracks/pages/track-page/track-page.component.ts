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

  tracksTrending: Array<TracksModel>=[];
  tracksRandom: Array<TracksModel>=[];

    constructor( private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
    //this.loadDataTrainig();
  }

  loadDataTrainig(): void{ //manejando el observable como promesa
    this.trackService.getAllTracks$().toPromise()
      .then( res =>{ this.tracksTrending = res})
      .catch (err => {
        console.log(err);
      });
  };
  async loadDataAll(): Promise<any>{ //manejando el observable como promesa
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  };

  loadDataRandom():void{ //manejando el observable como observable
    this.trackService.getAllTracksRandom$()
    .subscribe( response =>{
      console.log(response);
      this.tracksRandom = response;
    }, err => { console.log(err);
    });
  };

  ngOnDestroy(): void {
   
  }

}
