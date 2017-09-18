import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linktext',
  templateUrl: './linktext.component.html',
  styleUrls: ['./linktext.component.css']
})
export class LinktextComponent implements OnInit {

  @Input() titletext: string
  @Input() linktext: string
  time: Date =  new Date()

  constructor() { }

  ngOnInit() {
    try {
          const link: string = this.linktext.split('//')[1];
          this.linktext = link.split('/')[0];      
    } catch (error) {
          return this.linktext      
    }
  }

}
