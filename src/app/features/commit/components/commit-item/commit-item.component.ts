import { Component, Input, OnInit } from '@angular/core';
import { Commit } from '../../models/commit';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.css'],
})
export class CommitItemComponent implements OnInit {
  @Input() commitItem: Commit;
  constructor() {}

  getProjectInTimeUrl(sha: string) {
    return `https://github.com/JoseVelizFTF/take-home/tree/${sha}`;
  }

  ngOnInit(): void {}
}
