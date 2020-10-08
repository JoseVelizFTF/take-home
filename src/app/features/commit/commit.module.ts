import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

import { CommitRoutingModule } from './commit-routing.module';
import { CommitListComponent } from './components/commit-list/commit-list.component';
import { CommitItemComponent } from './components/commit-item/commit-item.component';

@NgModule({
  declarations: [CommitListComponent, CommitItemComponent, TimeAgoPipe],
  imports: [CommonModule, CommitRoutingModule, HttpClientModule],
  exports: [CommitListComponent],
})
export class CommitModule {}
