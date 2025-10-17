export interface Comment {
  id: number;
  post_slug: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: Date;
  approved: boolean;
  parent_id?: number | null;
}

export interface CommentInput {
  post_slug: string;
  author_name: string;
  author_email: string;
  content: string;
  parent_id?: number | null;
}

export interface CommentDisplay {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
  parent_id?: number | null;
  replies?: CommentDisplay[];
}
