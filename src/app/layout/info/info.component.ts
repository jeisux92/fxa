import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fna-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }
  

}
