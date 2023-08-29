import { NewPost } from '@/entities/Post';
import { IPostRepository } from '@/gateways/IPostRepository';

export const createPost = (repository: IPostRepository, post: NewPost) => {
	return repository.createPost(post);
};

export const getPosts = (repository: IPostRepository) => {
	return repository.getPosts();
};

export const getPostById = (repository: IPostRepository, id: number) => {
	return repository.getPostById(id);
};

export const deletePost = (repository: IPostRepository, id: number) => {
	return repository.deletePost(id);
};
