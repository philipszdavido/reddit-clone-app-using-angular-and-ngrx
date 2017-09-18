import { Component, OnInit, Input } from '@angular/core';
import * as fromArticle from '../../redux/reducer'
import * as fromAction from '../../redux/actions/articles'
import { Article } from '../../redux/models/article';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})

export class LinkComponent implements OnInit {

  id : number = 0
  @Input() article: Article

  constructor(private store: Store<fromArticle.State>) { }

  ngOnInit() {
  }

  upvote = () => {
    this.store.dispatch(new fromAction.IncrementArticlePointAction(this.article))
  }

  downvote = () => {
    this.store.dispatch(new fromAction.DecrementArticlePointAction(this.article))
  }

}
