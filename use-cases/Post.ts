import { IPostRepository } from '@/gateways/IPostRepository';
import { Prisma } from '@prisma/client';

export const createPost = async (
	repository: IPostRepository,
	post: Prisma.PostCreateInput
) => {
	return await repository.createPost(post);
};

export const getPosts = async (repository: IPostRepository) => {
	return await repository.getPosts();
};

export const getPostById = async (repository: IPostRepository, id: string) => {
	return await repository.getPostById(id);
};

export const deletePost = async (repository: IPostRepository, id: string) => {
	return await repository.deletePost(id);
};
