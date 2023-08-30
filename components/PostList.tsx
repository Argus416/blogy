import React from 'react'; // Import React
import { useAppSelector } from '@/redux/hooks';
import { Post } from '@prisma/client';
import _ from 'lodash';
import PostCard from './PostCard';

export default function PostList() {
	const posts = useAppSelector((state) => state.postReducer.posts);

	const chunkedPosts = _.chunk(posts, 4);

	return (
		<div>
			{_.isEmpty(posts) ? (
				<div className='text-center text-2xl text-neutral-600 font-semibold'>
					No posts found
				</div>
			) : (
				chunkedPosts.map((postChunk: any, index) => (
					<div
						key={index}
						className={`flex ${
							postChunk.length < 4 ? 'justify-center' : 'justify-between'
						}`}
					>
						{postChunk.map((post: Post) => (
							<PostCard
								key={post.id}
								post={post}
							/>
						))}
					</div>
				))
			)}
		</div>
	);
}
