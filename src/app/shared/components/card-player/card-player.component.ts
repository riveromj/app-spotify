import { Component, OnInit, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';


@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input () mode: 'small' | 'big' = 'small';
  @Input () track: TracksModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: ''
  };

  constructor( private multimediaService:MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TracksModel){
    // enviando cancion al reproductor
    this.multimediaService.callback.emit(track);
    
  }

}
