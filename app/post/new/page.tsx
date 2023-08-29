import CreatePost from '@/components/CreatePost';
import React from 'react';

export default function NewPost() {
	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>NewPost</h1>

			<CreatePost />
		</div>
	);
}
