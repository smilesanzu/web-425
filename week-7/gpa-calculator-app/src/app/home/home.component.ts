/*
  Title: home.component.ts
  Author: Janis Gonzalez
  Date: July 9, 2023
  Description: homepage component logic
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Grade for class
export class HomeComponent implements OnInit {
  transcriptForm: FormGroup
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
  transcriptEntries: Array<ITranscript> = []
  gpaTotal: number = 0

  constructor(private fb: FormBuilder) {
    this.transcriptForm = {} as FormGroup
  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({course: ['', Validators.required], grade: ['', Validators.required]})
  }

  get form() {
    return this.transcriptForm.controls
  }

  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    this.transcriptEntries.push({course: this.form['course'].value, grade: this.form['grade'].value})
    event.currentTarget.reset()
  }

  clearEntries() {
    this.transcriptEntries = []
    this.gpaTotal = 0
  }

  calculateResults() {
    let gpa: number = 0

    for(let i = 0; i < this.transcriptEntries.length - 1; i++) {
      switch(this.transcriptEntries[i].grade) {
        case 'A':
          gpa += 4.0
          break;
        case 'A-':
          gpa += 3.70
          break;
        case 'B+':
          gpa += 3.33
          break;
        case 'B':
          gpa += 3.0
          break;
        case 'B-':
          gpa += 2.70
          break;
        case 'C+':
          gpa += 2.30
          break;
        case 'C':
          gpa += 2.0
          break;
        case 'C-':
          gpa += 1.70
          break;
        case 'C-':
          gpa += 1.70
          break;
        case 'D+':
          gpa += 1.30
          break;
        case 'D':
          gpa += 1.0
          break;
        case 'D-':
          gpa += 0.70
          break;
        default:
          gpa += 0.0
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length
  }

}
