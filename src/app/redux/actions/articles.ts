import { Action } from '@ngrx/store';
import { Article } from '../models/article';

export const ActionTypes = {
    LOAD_ARTICLES:'Load Articles',
    ADD_ARTICLE: 'Add Article',
    INCREMENT_ARTICLE_POINT: 'Increment Article Point',
    DECREMENT_ARTICLE_POINT: 'Decrememnt Article Point'
}

export class AddArticleAction implements Action{
    type = ActionTypes.ADD_ARTICLE;
    constructor(public payload:Article){}
}
export class IncrementArticlePointAction implements Action{
    type = ActionTypes.INCREMENT_ARTICLE_POINT;
    constructor(public payload:Article){}
}
export class DecrementArticlePointAction implements Action{
    type = ActionTypes.DECREMENT_ARTICLE_POINT;
    constructor(public payload:Article){}
}

export type Actions = AddArticleAction | DecrementArticlePointAction | IncrementArticlePointAction
