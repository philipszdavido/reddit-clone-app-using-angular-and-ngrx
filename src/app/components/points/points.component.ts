import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  @Input() points: number

  constructor() { }

  ngOnInit() {
  }

}
