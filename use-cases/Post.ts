import { IPostRepository } from '@/gateways/client/IPostRepositoryClient';
import { Prisma } from '@prisma/client';

export const getPosts = async (repository: IPostRepository) => {
	return await repository.getPosts();
};

export const getPostById = async (repository: IPostRepository, id: string) => {
	return await repository.getPostById(id);
};

export const createPost = async (
	repository: IPostRepository,
	post: Prisma.PostCreateInput
) => {
	return await repository.createPost(post);
};

export const updatePost = async (
	repository: IPostRepository,
	id: string,
	body: Prisma.PostUpdateInput
) => {
	return await repository.updatePost(id, body);
};

export const deletePost = async (repository: IPostRepository, id: string) => {
	return await repository.deletePost(id);
};
