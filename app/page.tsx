import PostList from '@/components/PostList';
import { wrapper } from '@/store';
import { Provider } from '@radix-ui/react-toast';
import Link from 'next/link';
import { Suspense } from 'react';

function Home() {
	return (
		<div>
			<PostList />
		</div>
	);
}

export default wrapper.withRedux(Home);
