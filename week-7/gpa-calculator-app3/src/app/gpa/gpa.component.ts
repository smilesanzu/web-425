/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Janis Gonzalez
 * Date: July 2, 2023
 * Description: gpa-calculator-app2
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
