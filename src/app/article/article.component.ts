import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  data = undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {
    // Get article ID from the #____ part of the URL
    let articleId = this.route.snapshot.fragment;

    // Retrieve article content via API, and store it
    const key = "e1681913-dae5-4524-8c7b-1bd3625924d0";
    const url = `https://content.guardianapis.com/${articleId}?show-fields=body&api-key=${key}`;
    this.data = await this.http.get<any>(url).toPromise();
  }
}
