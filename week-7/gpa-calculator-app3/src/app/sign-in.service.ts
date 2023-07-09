/*
  Title: transcript.interface.ts
  Author: Janis Gonzalez
  Date: July 9, 2023
  Description: sign in service file
*/

// Import
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Export
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
