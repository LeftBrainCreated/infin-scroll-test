import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.scss']
})
export class DisplayBoxComponent implements OnInit {

  @Input() collection: any;

  constructor(
  ) {}
  
  ngOnInit(): void {
  }
}