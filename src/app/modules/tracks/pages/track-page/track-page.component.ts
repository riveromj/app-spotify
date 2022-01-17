import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '../../../../core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  mockList: Array<TracksModel>=[];

    constructor() { }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    console.log(data);
    this.mockList=data;
  }

}
