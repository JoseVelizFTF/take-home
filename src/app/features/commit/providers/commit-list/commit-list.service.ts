import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';
import { Commit } from '../../models/commit';
import { Observable, empty} from 'rxjs';
import {expand, map, reduce} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommitListService {
  baseUrl = environment.baseUrl;
  firstSha: string = '09403c54c944d8e9d19ab222f6207aa5d0d8f289';

  constructor(private httpClient: HttpClient) {}

  getCommitUrl = (sha: string) =>
    `${this.baseUrl}/repos/JoseVelizFTF/dogker-demo-front/git/commits/${sha}`;

  getCommits(): Observable<Commit[]> {
    //...
    return this.getCommitUrl(this.firstSha).pipe(expand(response => ));
  }
}
