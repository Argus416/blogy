import PostList from '@/components/PostList';
import { wrapper } from '@/store';

function Home() {
	return (
		<div>
			<PostList />
		</div>
	);
}

export default wrapper.withRedux(Home);
