import { FomratedPost, Post, NewPost } from '@/entities/Post';

export interface IPostRepository {
	getPosts(): FomratedPost[];
	getPostById(id: number): FomratedPost | undefined;
	createPost(post: NewPost): void;
	deletePost(id: number): void;
}
