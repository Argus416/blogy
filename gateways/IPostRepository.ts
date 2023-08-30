import { Prisma, Post } from '@prisma/client';

export interface IPostRepository {
	createPost(post: Prisma.PostCreateInput): Promise<Post>;
	deletePost(id: string): Promise<Post | null>;
	getPostById(id: string): Promise<Post | null>;
	getPosts(): Promise<Post[]>;
}
