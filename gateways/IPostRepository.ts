import { FomratedPost, Post, NewPost } from '@/entities/Post';
import { Prisma } from '@prisma/client';

export interface IPostRepository {
	getPosts(): Post[];
	getPostById(id: number): FomratedPost | undefined;
	createPost(post: NewPost): void;
	deletePost(id: number): void;
}
