export class Commit {
  sha: string;
  parents: Commit[];
  commiter: Commiter;
}

class Commiter {
  name: string;
  email: string;
  data: string;
}
