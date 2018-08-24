import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'fna-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit, OnChanges {

  @Input() step: number;
  steps: string[];
  constructor() { }

  ngOnInit() {
    this.checkStep();
  }

  mapSteps() {

    this.steps = [];
    for (let i = 1; i < this.step; i++) {
      this.steps.push('pass');
    }
    this.steps.push('active');
  }

  ngOnChanges() {
    this.checkStep();
  }

  checkStep() {
    if (this.step) {
      this.mapSteps();
    }
  }
}
