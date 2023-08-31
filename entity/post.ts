import { formateDate } from '@/lib/helpers';
import { Post } from '@prisma/client';

export const postformater = (data: Post): IPostFormated => {
	return {
		id: data.id,
		title: data.title,
		content: data.content!,
		update_at: data.updatedAt,
		created_at: data.createdAt,
		formated_update_at: formateDate(data.updatedAt),
		formated_created_at: formateDate(data.createdAt),
	};
};

export interface IPostFormated {
	id: string;
	title: string;
	content: string;
	update_at: Date;
	created_at: Date;
	formated_update_at: string;
	formated_created_at: string;
}
