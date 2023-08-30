import PostList from '@/components/PostList';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
	return (
		<div>
			<PostList />
		</div>
	);
}
