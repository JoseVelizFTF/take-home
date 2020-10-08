import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';
import { Commit } from '../../models/commit';
import { Observable, empty, of } from 'rxjs';
import { expand, map, reduce } from 'rxjs/operators';

import { COMMITS } from './mock-commits';

@Injectable({
  providedIn: 'root',
})
export class CommitListService {
  isMock = true;

  baseUrl = environment.baseUrl;
  projectName: string = 'take-home';
  userName: string = 'JoseVelizFTF';
  lastCommitSha: string = 'c4dbca83565acbefce6ccc78407888089187cf75';

  constructor(private httpClient: HttpClient) {}

  getCommitUrl = (sha: string) => {
    let generatedUrl = `${this.baseUrl}/repos/${this.userName}/${this.projectName}/git/commits/${sha}`;
    return this.httpClient.get(generatedUrl);
  };

  getCommits(): Observable<any[]> {
    if (this.isMock) {
      return of(COMMITS);
    } else {
      return this.getCommitUrl(this.lastCommitSha).pipe(
        expand((response: any) =>
          response.parents.length > 0
            ? this.getCommitUrl(response.parents[0].sha)
            : empty()
        ),
        map((res) => res),
        // if you want the observable to emit 1 value everytime that
        // a chunk is fetched, use `scan` instead of `reduce`
        reduce((acc, val: any) => acc.concat(val), new Array<Commit>())
      );
    }
  }
}
