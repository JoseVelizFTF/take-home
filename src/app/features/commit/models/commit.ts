export interface Commit {
  sha: string;
  url: string;
  html_url: string;
  parents?: Commit[];
  committer?: Committer;
  message?: String;
  author?: Author;
  tree?: Tree;
  verification?: Verification;
  node_id?: string;
}

interface Verification {
  verified: boolean;
  reason: string;
  signature?: any;
  payload?: any;
}

interface Committer {
  name: string;
  email: string;
  date: string;
}

interface Author {
  name: string;
  email: string;
  date: string;
}

interface Tree {
  sha: string;
  url: string;
}
