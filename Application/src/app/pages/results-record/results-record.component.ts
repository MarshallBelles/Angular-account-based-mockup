import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results-record',
  templateUrl: './results-record.component.html',
  styleUrls: ['./results-record.component.css']
})
export class ResultsRecordComponent implements OnInit, OnDestroy {

  result: any;
  sub: Subscription;
  constructor(private ss: SearchService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe((params) => {
      this.result = ss.DemoData[params['record_id']];
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
