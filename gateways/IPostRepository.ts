import { Prisma, Post } from '@prisma/client';

export interface IPostRepository {
	getPosts(): Promise<Post[]>;
	getPostById(id: string): Promise<Post | null>;
	createPost(post: Prisma.PostCreateInput): Promise<Post>;
	updatePost(id: string, body: Prisma.PostUpdateInput): Promise<Post | null>;
	deletePost(id: string): Promise<Post | null>;
}
