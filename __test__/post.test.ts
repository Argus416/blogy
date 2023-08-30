import { PostRepositoryServer } from '@/gateways/server/PostRepositoryServer';
import { createPost, deletePost, getPostById, getPosts } from '../use-cases/Post';
import { Post, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';
import exp from 'constants';

const newPost = {
	title: faker.lorem.words(3),
	content: faker.lorem.paragraphs(3),
} as Prisma.PostCreateInput;

let post = {} as Post;
const postRepository = new PostRepositoryServer();

describe('CRUD POST', () => {
	it('should create a post', async () => {
		const result = await createPost(postRepository, newPost);
		post = { ...result };

		expect(result).toHaveProperty('id');
	});

	it('should get a post', async () => {
		const result = await getPostById(postRepository, post.id);
		expect(result).toHaveProperty('id');
	});

	it('should get all posts', async () => {
		const result = await getPosts(postRepository);
		expect(result).toEqual(
			expect.arrayContaining([expect.objectContaining({ id: post.id })])
		);
	});

	it('should remove a post', async () => {
		const result = await deletePost(postRepository, post.id);
		expect(result).toHaveProperty('id');
	});
});
