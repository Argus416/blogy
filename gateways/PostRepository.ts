import { FomratedPost, NewPost, Post } from '@/entities/Post';
import { IPostRepository } from './IPostRepository';
import { posts } from '@/data';

export class PostRepository implements IPostRepository {
	createPost = (body: NewPost) => {
		const data = {
			id: posts.length + 1,
			title: body.title,
			content: body.content,
			dateCreated: new Date(),
		} as Post;
		posts.push(data);
		return body;
	};

	getPosts = () => {
		const data = posts.map((post) => {
			return {
				id: post.id,
				title: post.title,
				content: post.content,
				date_created: post.dateCreated,
			} as FomratedPost;
		});
		return data;
	};

	getPostById = (id: number) => {
		const result = posts.find((post) => post.id === id);

		if (result) {
			return {
				id: result.id,
				title: result.title,
				content: result.content,
				date_created: result.dateCreated,
			} as FomratedPost;
		} else {
			return undefined;
		}
	};

	deletePost = (id: number) => {
		const index = posts.findIndex((post) => post.id === id);
		if (index > -1) {
			posts.splice(index, 1);
		}
	};
}
