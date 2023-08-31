import { Post } from '@prisma/client';

export const postformater = (data: Post) => {
	return {
		id: data.id,
		title: data.title,
		content: data.content,
		update_at: data.updatedAt,
		created_at: data.createdAt,
		formated_update_at: new Date(data.updatedAt).toLocaleDateString(),
		formated_created_at: new Date(data.createdAt).toLocaleDateString(),
	};
};
