import { Post } from '@prisma/client';

type DetailedPostViewProps = {
	post: Post;
};

export default function DetailedPostView({ post }: DetailedPostViewProps) {
	return (
		<div>
			<div>
				<h1>{post!.title}</h1>
				<p>{post!.content}</p>
			</div>
		</div>
	);
}
