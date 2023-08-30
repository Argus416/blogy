'use client';
import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { Post } from '@prisma/client';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';
import _ from 'lodash';
import { useAppSelector } from '@/redux/hooks';

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
