import { FomratedPost } from '@/entities/Post';
import { getPostById } from '@/use-cases/Post';
import Link from 'next/link';
import React from 'react';

type DetailedPostViewProps = {
	post: FomratedPost;
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
