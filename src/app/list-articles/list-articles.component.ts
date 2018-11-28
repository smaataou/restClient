import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles: Article[];

  articleForm: FormGroup;

  operation: String = 'add';

  selectedArticle: Article;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
    this.articleForm = this.fb.group(
      {
        nom: ['', Validators.required],
        description: ''
      }
    );
  }

  ngOnInit() {
    this.loadArticles();
    this.initArticle();
    this.articles = this.route.snapshot.data.articles;

  }
  loadArticles() {
    this.articleService.getArticles().subscribe(
      data => {this.articles = data; console.log(this.articles); },
      error => {console.log('err'); },
      () => {console.log('loading articles was done'); }
    );

  }
  addArticle() {
    const a = this.articleForm.value;
    this.articleService.addArticle(a).subscribe(
      res => {
        this.initArticle();
        this.loadArticles();
      }
    );
  }
  updateArticle() {
    this.articleService.updateArticle(this.selectedArticle).subscribe(
      res => {
        this.initArticle();
        this.loadArticles();
      }
    );
  }
  initArticle() {
    this.selectedArticle = new Article();
    this.createForm();
  }
  deleteArticle() {
    this.articleService.deleteArticle(this.selectedArticle.id).subscribe(
      res => {
        this.selectedArticle = new Article();
        this.loadArticles();
      }
    );
  }




}
