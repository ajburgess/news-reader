import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', component: HeadlinesComponent },
  { path: 'article', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
