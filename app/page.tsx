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

	return <PostList />;
}

export default Home;
