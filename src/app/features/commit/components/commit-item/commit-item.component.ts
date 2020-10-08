import { Component, Input, OnInit } from '@angular/core';
import { Commit } from '../../models/Commit';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.css'],
})
export class CommitItemComponent implements OnInit {
  @Input() commitItem: Commit;
  constructor() {}

  ngOnInit(): void {}
}
