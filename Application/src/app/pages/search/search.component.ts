import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[];

  constructor(private search: SearchService) {
    this.results = [];
  }

  ngOnInit() {
    this.results = this.search.DemoData;
  }

}
