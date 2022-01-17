import { Component, OnInit, Input} from '@angular/core';
import { TracksModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  @Input () title: string='';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TracksModel>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
