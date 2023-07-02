/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Janis Gonzalez
 * Date: July 2, 2023
 * Description: gpa-calculator-app2
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade!: string;
  @Input() course!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
