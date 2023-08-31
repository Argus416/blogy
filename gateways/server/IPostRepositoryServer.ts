import { Post, Prisma } from '@prisma/client';

export interface IPostRepositoryServer {
	getPosts(): Promise<Post[]>;
	getPostById(id: string): Promise<Post | null>;
	createPost(post: Prisma.PostCreateInput): Promise<Post>;
	updatePost(id: string, body: Prisma.PostUpdateInput): Promise<Post | null>;
	deletePost(id: string): Promise<Post | null>;
}
