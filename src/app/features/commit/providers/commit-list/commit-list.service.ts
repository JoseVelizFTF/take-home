import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';
import { Commit, CommitList } from '../../models/commit';
import { Observable, of } from 'rxjs';
import { expand, groupBy, map, mergeMap, reduce, tap } from 'rxjs/operators';

import { COMMITS } from './mock-commits';

@Injectable({
  providedIn: 'root',
})
export class CommitListService {
  isMock = false;

  baseUrl = environment.baseUrl;
  projectName: string = 'take-home';
  userName: string = 'JoseVelizFTF';
  lastCommitSha: string = 'f4fc64200f6522a072a5a4dbe6ff1ab9109aa5b6';

  constructor(private httpClient: HttpClient) {}

  getCommitUrl = (sha: string) => {
    let generatedUrl = `${this.baseUrl}/repos/${this.userName}/${this.projectName}/git/commits/${sha}`;
    return this.httpClient.get(generatedUrl);
  };

  getTransformedCommits(commits: Commit[]): Observable<CommitList> {
    return of(...commits).pipe(
      map((commit: any) => ({
        ...commit,
        id: new Date(commit.committer.date).toLocaleDateString(),
      })),
      groupBy((p) => p.id),
      mergeMap((group$) =>
        group$.pipe(
          reduce((acc, cur) => [...acc, cur], [`${group$.key}`]),
          map(
            ([id, ...values]): CommitList => ({
              id,
              values,
            })
          )
        )
      )
    );
  }

  getCommits(): Observable<Commit[]> {
    if (this.isMock) {
      return of(COMMITS);
    } else {
      return this.getCommitUrl(this.lastCommitSha).pipe(
        expand((response: any) =>
          response.parents.length > 0
            ? this.getCommitUrl(response.parents[0].sha)
            : of()
        ),
        map((res) => res),
        // if you want the observable to emit 1 value everytime that
        // a chunk is fetched, use `scan` instead of `reduce`
        reduce((acc, val: any) => acc.concat(val), new Array<Commit>())
      );
    }
  }
}
