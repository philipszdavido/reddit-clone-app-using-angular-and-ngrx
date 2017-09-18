import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../redux/models/article';

@Component({
  selector: 'app-linklist',
  templateUrl: './linklist.component.html',
  styleUrls: ['./linklist.component.css']
})
export class LinklistComponent implements OnInit {
  @Input() articles : Array<Article>;
  
  constructor() { }

  ngOnInit() {
  }

}
