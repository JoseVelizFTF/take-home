import { Component, OnInit } from '@angular/core';
import { Commit } from '../../models/Commit';
@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  commits: Commit[];

  constructor() {}

  ngOnInit(): void {
    this.commits = [
      {
        sha: 'string',
        parents: [],
        commiter: {
          name: 'string',
          email: 'string',
          data: 'string',
        },
      },
    ];
  }
}
