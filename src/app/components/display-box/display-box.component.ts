import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.scss']
})
export class DisplayBoxComponent implements OnInit {

  @Input() collection: any;

  constructor(
    // private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
  }

  changeText() {
    this.collection.ownerId = 'clicked';
    // this.cdr.detectChanges();
    console.log('detect changes');
  }
}