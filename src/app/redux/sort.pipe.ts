import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './models/article';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(articles: Article[], args?: any): Article[] {
    return articles.sort((a: Article, b: Article)=> {
      return b.points - a.points
    })
  }

}
