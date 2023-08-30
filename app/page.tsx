'use client';
import PostList from '@/components/PostList';
import { useAppDispatch } from '@/redux/hooks';
import { fetchPosts } from '@/redux/reducers/postSlice';
import { useEffect, useState } from 'react';

function Home() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div>
			<PostList />
		</div>
	);
}

export default Home;
