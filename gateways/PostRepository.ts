import { prisma } from '@/db';
import { NewPost } from '@/entities/Post';
import { IPostRepository } from './IPostRepository';
import { Prisma } from '@prisma/client';

export class PostRepository implements IPostRepository {
	createPost = async (body: Prisma.PostCreateInput) => {
		const { title, content } = body;
		const result = await prisma.post.create({
			data: {
				title,
				content,
			},
		});

		return result;
	};

	getPosts = async () => {
		const result = await prisma.post.findMany();
		return result;
	};

	getPostById = async (id: string) => {
		const result = await prisma.post.findUnique({
			where: {
				id: id,
			},
		});

		return result;
	};

	deletePost = async (id: string) => {
		const result = await prisma.post.delete({
			where: {
				id: id,
			},
		});

		return result;
	};
}
