import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  columnsToDisplay: string[] = ['code', 'name'];
  subjects = new Array<Subject>();

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

}
