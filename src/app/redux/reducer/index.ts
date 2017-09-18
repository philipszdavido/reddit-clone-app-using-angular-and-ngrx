import { 
    combineReducers, 
    ActionReducer,
    ActionReducerMap, 
    createSelector, 
    createFeatureSelector, 
    META_REDUCERS
} from '@ngrx/store';
import * as fromArticle from '../reducer/articles';

import { compose } from "@ngrx/core";
import { combineLatest } from 'rxjs/observable/combineLatest';
import { storeLogger } from 'ngrx-store-logger';

export interface State {
    articles:fromArticle.State,
}
export const reducers: ActionReducerMap<State> = {
    articles:fromArticle.reducer,
}
export const getArticleState = (state : State) => state.articles;
export const getArticles = createSelector(getArticleState,fromArticle.getArticles);
