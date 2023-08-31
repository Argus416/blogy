import { IPostFormated } from '@/entity/post';
import { Post, Prisma } from '@prisma/client';

export interface IPostRepositoryClient {
	getPosts(): Promise<IPostFormated[]>;
	getPostById(id: string): Promise<IPostFormated | undefined>;
	createPost(post: Prisma.PostCreateInput): Promise<Post>;
	updatePost(id: string, body: Prisma.PostUpdateInput): Promise<Post | null>;
	deletePost(id: string): Promise<Post | null>;
}
