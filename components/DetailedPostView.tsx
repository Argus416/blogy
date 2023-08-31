import { IPostFormated } from '@/entity/post';
import { Post } from '@prisma/client';

type DetailedPostViewProps = {
	post: IPostFormated;
};

export default function DetailedPostView({ post }: DetailedPostViewProps) {
	return (
		<div>
			<div className='flex items-center justify-between  mt-10'>
				<h1 className=' text-2xl font-bold '>{post!.title}</h1>
				<p className=' text-base font-light'>{post.formated_update_at}</p>
			</div>
			<p className=' text-base font-light mt-12'>{post!.content}</p>
		</div>
	);
}
