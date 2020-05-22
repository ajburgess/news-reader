import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  data = undefined;

  constructor(private http: HttpClient, private router: Router) {
  }

  pickArticle(articleId: string) {
    // Navigate to the article page,
    // with article ID after the # part of URL
    const url = `/article#${articleId}`;
    this.router.navigateByUrl(url);
  }

  async ngOnInit() {
    // Get headlines from API, store them
    const key = "e1681913-dae5-4524-8c7b-1bd3625924d0";
    const url = `https://content.guardianapis.com/search?show-fields=thumbnail&api-key=${key}`;
    this.data = await this.http.get<any>(url).toPromise();
  }
}
