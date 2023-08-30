import { Post } from '@prisma/client';

type DetailedPostViewProps = {
	post: Post;
};

export default function DetailedPostView({ post }: DetailedPostViewProps) {
	return (
		<div>
			<h1 className="text-center text-neutral-600 text-2xl font-semi-bold mt-10">Post Title : {post!.title}</h1>
			<p className="text-center text-neutral-600 text-base font-light mt-12">{post!.content}</p>
		</div>
	);
}
