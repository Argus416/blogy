import { Post } from '@prisma/client';

type DetailedPostViewProps = {
	post: Post;
};

export default function DetailedPostView({ post }: DetailedPostViewProps) {
	return (
		<div>
			<h1 className=' text-2xl font-bold mt-10'>{post!.title}</h1>
			<p className=' text-base font-light mt-12'>{post!.content}</p>
		</div>
	);
}
