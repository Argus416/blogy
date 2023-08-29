'use client';
import { getPosts } from '@/use-cases/Post';
import PostCard from './PostCard';
import { PostRepository } from '@/gateways/PostRepository';

export default function PostList() {
	const repo = new PostRepository();

	const posts = getPosts(repo);

	return (
		<div>
			{posts.length === 0 ? (
				<h1 className='text-2xl font-bold'>No posts</h1>
			) : (
				posts.map((post) => (
					<PostCard
						key={post.id}
						post={post}
					/>
				))
			)}
		</div>
	);
}
