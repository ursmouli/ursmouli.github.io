import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';

import {of,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects: Subject[];

  constructor() {
    this.subjects = new Array<Subject>();
    this.subjects.push(new Subject('mat', 'Maths'));
    this.subjects.push(new Subject('sci', 'Science'));
    this.subjects.push(new Subject('eng', 'English'))
  }

  getSubjects(): Observable<Subject[]> {
    return of(this.subjects);
  }
}
