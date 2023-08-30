import Link from 'next/link';

import { Post } from '@prisma/client';
type PostCardProps = {
	post: Post;
};

export default function PostCard({ post }: PostCardProps) {
	return (
		<div className='flex gap-10 items-center my-4 '>
			<h1 className='text-2xl font-bold'>
				{post.id} - {post.title}
			</h1>
			<Link
				className='bg-blue-400 text-white px-3 py-1 rounded-md'
				href={`/post/${post.id}`}
			>
				voir le post
			</Link>
		</div>
	);
}
