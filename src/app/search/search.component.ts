import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.query = params[`query`] || ``;
      }
    );
  }

  ngOnInit() {}

}
