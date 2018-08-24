import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fna-title-state',
  templateUrl: './title-state.component.html',
  styleUrls: ['./title-state.component.scss']
})
export class TitleStateComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() retake: boolean;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

}
