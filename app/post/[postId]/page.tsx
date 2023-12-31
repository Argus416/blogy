'use client';
import DetailedPostView from '@/components/DetailedPostView';
import Loading from '@/components/Loading';
import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { getPostById } from '@/use-cases/Post';
import { Post } from '@prisma/client';
import Link from 'next/link';
import React, { Suspense, useEffect, useMemo, useState } from 'react';

type PostDetailsProps = {
	params: { postId: string };
};

export default function PostDetails({ params }: PostDetailsProps) {
	const repo = useMemo(() => {
		return new PostRepositoryClient();
	}, []);

	const [post, setPost] = useState<Post | null>(null);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			const post = await getPostById(repo, params.postId);
			setPost(post);
		};
		fetchPost();
	}, [params.postId, repo]);

	const test = async () => {
		const post = await getPostById(repo, params.postId);
		console.log({ post });
	};
	if (!post) {
		return <Loading/>;
	}
	return (
		<>
			<DetailedPostView post={post} />
		</>
	);
}
