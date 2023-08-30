import { getPosts } from '@/use-cases/Post';
import PostCard from './PostCard';
import { PostRepository } from '@/gateways/PostRepository';
import { Suspense } from 'react';

export default async function PostList() {
	const repo = new PostRepository();

	const posts = await getPosts(repo);

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				{posts.map((post) => (
					<PostCard
						key={post.id}
						post={post}
					/>
				))}
			</Suspense>
		</div>
	);
}
