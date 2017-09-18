import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';
import { Article } from '../../redux/models/article';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {

  addLinkForm : FormGroup
  @Output() addArticle = new EventEmitter<any>()

  constructor(private fb: FormBuilder) {
    this.addLinkForm = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(4)]],
      article: ['',[Validators.required,Validators.minLength(4)]]
    })
   }

  ngOnInit() {
  }

  addLink = () => {
    this.addArticle.emit({
      title:this.addLinkForm.controls['title'].value,
      article:this.addLinkForm.controls['article'].value
    })
    this.addLinkForm.setValue({
      title:'',
      article:''
    })
  }

}
