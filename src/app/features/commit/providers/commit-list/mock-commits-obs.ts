import { Commit } from '../../models/commit';
import { Observable, of } from 'rxjs';

export const COMMITS_OBS: Observable<Commit[]> = of([
  {
    sha: 'c4dbca83565acbefce6ccc78407888089187cf75',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OmM0ZGJjYTgzNTY1YWNiZWZjZTZjY2M3ODQwNzg4ODA4OTE4N2NmNzU=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/c4dbca83565acbefce6ccc78407888089187cf75',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/c4dbca83565acbefce6ccc78407888089187cf75',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:15:37Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:15:37Z',
    },
    tree: {
      sha: '0b7aa4f457deb3c50fd22efb59e2d832582e5130',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/0b7aa4f457deb3c50fd22efb59e2d832582e5130',
    },
    message: 'commit model added',
    parents: [
      {
        sha: '373335075c68cce05492b20a4eeb4d90cff1a06f',
        url:
          'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/373335075c68cce05492b20a4eeb4d90cff1a06f',
        html_url:
          'https://github.com/JoseVelizFTF/take-home/commit/373335075c68cce05492b20a4eeb4d90cff1a06f',
      },
    ],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    sha: '373335075c68cce05492b20a4eeb4d90cff1a06f',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OjM3MzMzNTA3NWM2OGNjZTA1NDkyYjIwYTRlZWI0ZDkwY2ZmMWEwNmY=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/373335075c68cce05492b20a4eeb4d90cff1a06f',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/373335075c68cce05492b20a4eeb4d90cff1a06f',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:15:23Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:15:23Z',
    },
    tree: {
      sha: 'ee3172b34f0234608e4ab6d64e346a17bb5cb315',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/ee3172b34f0234608e4ab6d64e346a17bb5cb315',
    },
    message: 'commit structure module added',
    parents: [
      {
        sha: '27503abf273886e14e6a21c2211fc6ad7a179b86',
        url:
          'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/27503abf273886e14e6a21c2211fc6ad7a179b86',
        html_url:
          'https://github.com/JoseVelizFTF/take-home/commit/27503abf273886e14e6a21c2211fc6ad7a179b86',
      },
    ],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    sha: '27503abf273886e14e6a21c2211fc6ad7a179b86',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OjI3NTAzYWJmMjczODg2ZTE0ZTZhMjFjMjIxMWZjNmFkN2ExNzliODY=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/27503abf273886e14e6a21c2211fc6ad7a179b86',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/27503abf273886e14e6a21c2211fc6ad7a179b86',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:11:36Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T12:11:36Z',
    },
    tree: {
      sha: '6d13fc2328c370a460c624e6afd61bd6d3e85951',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/6d13fc2328c370a460c624e6afd61bd6d3e85951',
    },
    message: 'baseUrl API env var added',
    parents: [
      {
        sha: 'cb062cf900c5c5293f876c03331a9e1385c01e31',
        url:
          'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/cb062cf900c5c5293f876c03331a9e1385c01e31',
        html_url:
          'https://github.com/JoseVelizFTF/take-home/commit/cb062cf900c5c5293f876c03331a9e1385c01e31',
      },
    ],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    sha: 'cb062cf900c5c5293f876c03331a9e1385c01e31',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OmNiMDYyY2Y5MDBjNWM1MjkzZjg3NmMwMzMzMWE5ZTEzODVjMDFlMzE=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/cb062cf900c5c5293f876c03331a9e1385c01e31',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/cb062cf900c5c5293f876c03331a9e1385c01e31',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T00:43:52Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T00:43:52Z',
    },
    tree: {
      sha: 'ee879843b88fbd29b6b489e80f8554ba03502e5a',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/ee879843b88fbd29b6b489e80f8554ba03502e5a',
    },
    message: 'clean initial template',
    parents: [
      {
        sha: '130ad5d9d835f9e029fd00cc25564255f43d1b93',
        url:
          'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/130ad5d9d835f9e029fd00cc25564255f43d1b93',
        html_url:
          'https://github.com/JoseVelizFTF/take-home/commit/130ad5d9d835f9e029fd00cc25564255f43d1b93',
      },
    ],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    sha: '130ad5d9d835f9e029fd00cc25564255f43d1b93',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OjEzMGFkNWQ5ZDgzNWY5ZTAyOWZkMDBjYzI1NTY0MjU1ZjQzZDFiOTM=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/130ad5d9d835f9e029fd00cc25564255f43d1b93',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/130ad5d9d835f9e029fd00cc25564255f43d1b93',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T00:41:47Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-08T00:41:47Z',
    },
    tree: {
      sha: 'e9c31cf555563014233bc33c0378df9c51cefec8',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/e9c31cf555563014233bc33c0378df9c51cefec8',
    },
    message: 'bootstrap dependency added',
    parents: [
      {
        sha: 'eb7c4cb2f62fa75052ac469df605ae3725ab6168',
        url:
          'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/eb7c4cb2f62fa75052ac469df605ae3725ab6168',
        html_url:
          'https://github.com/JoseVelizFTF/take-home/commit/eb7c4cb2f62fa75052ac469df605ae3725ab6168',
      },
    ],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
  {
    sha: 'eb7c4cb2f62fa75052ac469df605ae3725ab6168',
    node_id:
      'MDY6Q29tbWl0MzAyMjA1MDU3OmViN2M0Y2IyZjYyZmE3NTA1MmFjNDY5ZGY2MDVhZTM3MjVhYjYxNjg=',
    url:
      'https://api.github.com/repos/JoseVelizFTF/take-home/git/commits/eb7c4cb2f62fa75052ac469df605ae3725ab6168',
    html_url:
      'https://github.com/JoseVelizFTF/take-home/commit/eb7c4cb2f62fa75052ac469df605ae3725ab6168',
    author: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-07T22:59:56Z',
    },
    committer: {
      name: 'JoseVelizFTF',
      email: 'jose.veliz@fulltimeforce.com',
      date: '2020-10-07T22:59:56Z',
    },
    tree: {
      sha: '152d8af486909f44317765c645c9ea1072e95252',
      url:
        'https://api.github.com/repos/JoseVelizFTF/take-home/git/trees/152d8af486909f44317765c645c9ea1072e95252',
    },
    message: 'initial commit',
    parents: [],
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null,
    },
  },
]);
