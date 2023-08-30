import { prisma } from '@/db';
import { IPostRepository } from '@/gateways/IPostRepository';
import { Prisma } from '@prisma/client';
import axios from 'axios';

export class PostRepositoryClient implements IPostRepository {
	createPost = async (body: Prisma.PostCreateInput) => {
		const response = await axios('/api/post', {
			method: 'POST',
			data: {
				title: body.title,
				content: body.content,
			},
		});
		return response.data;
	};

	getPosts = async () => {
		const response = await axios('/api/post/all', {
			method: 'GET',
		});
		return response.data;
	};

	getPostById = async (id: string) => {
		const response = await axios(`/api/post/${id}`, {
			method: 'GET',
		});
		return response.data;
	};

	deletePost = async (id: string) => {
		const response = await axios(`/api/post/${id}`, {
			method: 'DELETE',
		});
		return response.data;
	};
}
