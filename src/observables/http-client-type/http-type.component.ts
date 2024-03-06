import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border"> 
      <ng-container *ngFor="let articles of $articles | async">
          <div *ngIf="articles.public">
            {{ articles.title }} - {{ articles.author }}
          </div>
      </ng-container> 
    </div>
  `
})
export class HttpTypeComponent {

  articlesService = inject(ArticlesService)

  $articles = this.articlesService.getArticlesSorted('desc')


}