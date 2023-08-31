import { postformater } from '@/entity/post';
import { IPostRepositoryClient } from '@/gateways/client/IPostRepositoryClient';
import { axiosClient } from '@/lib/axiosClient';
import { Post, Prisma } from '@prisma/client';

export class PostRepositoryClient implements IPostRepositoryClient {
	getPosts = async () => {
		const response = await axiosClient('/post/all', {
			method: 'GET',
		});

		const data = response.data.map((post: Post) => postformater(post));

		return data;
	};

	getPostById = async (id: string) => {
		try {
			const response = await axiosClient(`/post/${id}`, {
				method: 'GET',
			});
			const data = postformater(response.data);

			return data;
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
