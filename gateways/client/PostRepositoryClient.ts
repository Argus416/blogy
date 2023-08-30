import { IPostRepository } from '@/gateways/IPostRepository';
import { axiosClient } from '@/lib/axiosClient';
import { Prisma } from '@prisma/client';
import axios from 'axios';

export class PostRepositoryClient implements IPostRepository {
	createPost = async (body: Prisma.PostCreateInput) => {
		const response = await axiosClient('/post', {
			method: 'POST',
			data: {
				title: body.title,
				content: body.content,
			},
		});
		return response.data;
	};

	getPosts = async () => {
		const response = await axiosClient('/post/all', {
			method: 'GET',
		});
		return response.data;
	};

	getPostById = async (id: string) => {
		try {
			const response = await axiosClient(`/post/${id}`, {
				method: 'GET',
			});

			return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	deletePost = async (id: string) => {
		const response = await axiosClient(`/post/${id}`, {
			method: 'DELETE',
		});
		return response.data;
	};
}