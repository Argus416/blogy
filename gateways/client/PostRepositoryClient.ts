import { IPostRepository } from '@/gateways/IPostRepository';
import { axiosClient } from '@/lib/axiosClient';
import { Prisma } from '@prisma/client';
import axios from 'axios';

export class PostRepositoryClient implements IPostRepository {
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

	createPost = async (body: Prisma.PostCreateInput) => {
		const { title, content } = body;

		if (title === '' || content === '') {
			alert('Please fill all fields');
			throw new Error('Please fill all fields');
		}

		const response = await axiosClient('/post', {
			method: 'POST',
			data: {
				title: body.title,
				content: body.content,
			},
		});
		return response.data;
	};

	updatePost = async (id: string, body: Prisma.PostUpdateInput) => {
		const { title, content } = body;

		if (title === '' || content === '') {
			alert('Please fill all fields');
			throw new Error('Please fill all fields');
		}

		const response = await axiosClient(`/post/${id}`, {
			method: 'PATCH',
			data: body,
		});
		return response.data;
	};
	deletePost = async (id: string) => {
		const response = await axiosClient(`/post/${id}`, {
			method: 'DELETE',
		});
		return response.data;
	};
}
