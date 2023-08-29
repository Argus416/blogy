import DetailedPostView from '@/components/DetailedPostView';
import { PostRepository } from '@/gateways/PostRepository';
import { getPostById } from '@/use-cases/Post';
import Link from 'next/link';
import React from 'react';

type PostDetailsProps = {
	params: { postId: string };
};

export default function PostDetails({ params }: PostDetailsProps) {
	console.log(params.postId);
	const repo = new PostRepository();
	const post = getPostById(repo, parseInt(params.postId));

	if (!post) {
		return <div>Post not found</div>;
	}
	return (
		<div>
			<Link href='/'>go home</Link>
			<DetailedPostView post={post!} />
		</div>
	);
}
