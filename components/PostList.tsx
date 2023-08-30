'use client';
import { useAppSelector } from '@/redux/hooks';
import { Post } from '@prisma/client';
import _ from 'lodash';
import PostCard from './PostCard';

export default function PostList() {
	const posts = useAppSelector((state) => state.postReducer.posts);

	return (
		<div>
			<h1>all posts</h1>
			{_.isEmpty(posts) ? (
				<span>no post</span>
			) : (
				posts?.map((post: Post) => (
					<PostCard
						key={post.id}
						post={post}
					/>
				))
			)}
		</div>
	);
}
