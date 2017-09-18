import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import * as fromArticle from './redux/reducer'
import * as fromAction from './redux/actions/articles'
import { Article } from './redux/models/article';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 id : number = 0
 article: Observable<Article[]>

  constructor(private store: Store<fromArticle.State>){
    this.article = this.store.select(fromArticle.getArticles)
  }

  addArticle = (val: any) => {
    this.store.dispatch(new fromAction.AddArticleAction(new Article(++this.id,val.title,val.article,0)))
  }
}
