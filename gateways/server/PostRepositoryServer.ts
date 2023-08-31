import { prisma } from '@/db';
import { Prisma } from '@prisma/client';
import { IPostRepositoryServer } from './IPostRepositoryServer';

export class PostRepositoryServer implements IPostRepositoryServer {
	getPosts = async () => {
		const result = await prisma.post.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
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

	updatePost = async (id: string, body: Prisma.PostUpdateInput) => {
		const result = await prisma.post.update({
			where: {
				id: id,
			},
			data: body,
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
