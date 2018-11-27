import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import {Article} from '../shared/article';

@Injectable()
export  class ArticleService {

  constructor(private http: HttpClient) {

  }


  getArticles(): Observable<any> {
    return this.http.get(API_URLS.ARTICLES_URL);

  }
  addArticle(article: Article): Observable<any> {
    return this.http.post(API_URLS.ARTICLES_URL, article);
  }
  updateArticle(article: Article): Observable<any> {
    return this.http.put(API_URLS.ARTICLES_URL, article);
  }
  deleteArticle(id): Observable<any> {
    return this.http.delete(API_URLS.ARTICLES_URL + `/${id}`);
  }
}
