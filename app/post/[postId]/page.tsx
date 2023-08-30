import DetailedPostView from '@/components/DetailedPostView';
import { PostRepository } from '@/gateways/server/PostRepositoryServer';
import { getPostById } from '@/use-cases/Post';
import Link from 'next/link';
import React, { Suspense } from 'react';

type PostDetailsProps = {
	params: { postId: string };
};

export default async function PostDetails({ params }: PostDetailsProps) {
	const repo = new PostRepository();
	const post = await getPostById(repo, params.postId);

	if (!post) {
		return <div>Post not found</div>;
	}
	return (
		<div>
			<Link href='/'>go home</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<DetailedPostView post={post} />
			</Suspense>
		</div>
	);
}
