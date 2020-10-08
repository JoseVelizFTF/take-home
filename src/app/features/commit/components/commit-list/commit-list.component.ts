import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../../models/commit';
import { CommitListService } from '../../providers/commit-list/commit-list.service';
@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  commits: Observable<Commit[]>;

  constructor(private commitListService: CommitListService) {}

  ngOnInit(): void {
    this.commits = this.commitListService.getCommits();
  }
}
