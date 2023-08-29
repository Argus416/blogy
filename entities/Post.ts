export interface Post {
	id: number;
	title: string;
	content: string;
	dateCreated: Date;
}

export type NewPost = Omit<Post, 'id' | 'dateCreated'>;

export interface FomratedPost {
	id: number;
	title: string;
	content: string;
	date_created: Date;
}
