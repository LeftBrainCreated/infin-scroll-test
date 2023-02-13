import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TrackVisibilityDirective } from "../../directives/track-visibility.directive";
import { DbSqlService } from "../../services/db-sql.service";
// import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss']
})
export class InfinityScrollComponent implements OnInit {
  @Input() pageNumber: number;

  @Output() pageNumberChange = new EventEmitter<number>();

  constructor(
    private visTrack: TrackVisibilityDirective
    , private dbApi: DbSqlService
  ) {}

  ngOnInit(): void {
    this.visTrack.visibile.subscribe((val) => {
      this.dbApi.initGetItemsHandler((this.pageNumber) * 10, 10)
    })
  }
}