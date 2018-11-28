import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import {ArticleService} from './list-articles/article.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';





@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFontAwesomeModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
