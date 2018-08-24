import { Component, OnInit } from '@angular/core';
import { BidirectionalService } from '../core/services/bidirectional.service';

@Component({
  selector: 'fna-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  subtitle: any;
  title: any;
  step: number = 1;
  card: any;
  final = false;
  retake = false;
  info: any;
  constructor(private _bidirectionalService: BidirectionalService) { }

  ngOnInit() {
    this._bidirectionalService.form.subscribe(x => {
      this.final = x.Final;
      this.step = x.breadCrumb;
      this.title = x.title;
      this.subtitle = x.subtitle;
      this.card = x.card;
      this.retake = x.retake;
      this.info = x.info;
    })
  }

} 
