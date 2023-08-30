import { PostRepository } from '../gateways/PostRepository';
import { createPost } from '../use-cases/Post';
import { Post, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';

const newPost = {
	title: faker.lorem.words(3),
	content: faker.lorem.paragraphs(3),
} as Prisma.PostCreateInput;

const post = {} as Post;
const postRepository = new PostRepository();

describe('CRUD POST', () => {
	it('should create a post', async () => {
		const result = await createPost(postRepository, newPost);
		expect(result).toBe(post);
	});
});
