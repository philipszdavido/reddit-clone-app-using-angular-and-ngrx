import * as articles from '../actions/articles';
import { Article } from '../models/article';

export interface State {
    articles : Array<Article>,
};
export const initialState : State = {
    articles : [],
};

export function reducer 
(state = initialState, action:articles.Actions) : State {

    switch (action.type) {
        case articles.ActionTypes.ADD_ARTICLE: {
            return {
                articles: [...state.articles,action.payload],
            }
        }
        case articles.ActionTypes.DECREMENT_ARTICLE_POINT: {
            return Object.assign({},state,{
                articles: state.articles.map(
                    (article: Article) => article.id == action.payload.id ? Object.assign({},article,--action.payload.points) : article 
                    )
            })            
        }
        case articles.ActionTypes.INCREMENT_ARTICLE_POINT: {
            return Object.assign({},state,{
                articles: state.articles.map(
                    (article: Article) => article.id == action.payload.id ? Object.assign({},article,++action.payload.points) : article 
                    )
            })            
        }
        default: {
            return  state;
        }
    }
};

export const getArticles = (state : State) => state.articles;
