import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit, CommitList } from '../../models/commit';
import { CommitListService } from '../../providers/commit-list/commit-list.service';
@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  commitList: CommitList[] = [];
  constructor(private commitListService: CommitListService) {}

  ngOnInit(): void {
    this.commitListService.getCommits().subscribe((commits) => {
      this.commitListService
        .getTransformedCommits(commits)
        .subscribe((item) => {
          this.commitList.push(item);
        });
    });
  }
}
