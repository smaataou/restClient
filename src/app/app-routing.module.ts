import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListArticlesComponent} from './list-articles/list-articles.component';
import {ArticleResolver} from './list-articles/article.resolver';

const routes: Routes = [
  {
    path: '', component: ListArticlesComponent,
    resolve: {
      produits: ArticleResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ArticleResolver]
})
export class AppRoutingModule { }
