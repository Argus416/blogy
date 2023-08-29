import { Post } from '@/entities/Post';

export function formatPost(post: Post) {
	return {
		id: post.id,
		title: post.title,
		content: post.content,
		date_created: post.dateCreated,
	};
}
