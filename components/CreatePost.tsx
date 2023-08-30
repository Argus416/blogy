'use client';
import { PostRepository } from '@/gateways/PostRepository';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
	const repo = new PostRepository();

	const { push } = useRouter();

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		try {
			const title = event.target.title.value;
			const content = event.target.content.value;

			if (title === '' || content === '') {
				alert('Please fill all fields');
				return;
			}

			await axios('/api/post', {
				method: 'POST',
				data: {
					title,
					content,
				},
			});

			alert('Post created');
			push('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<h1>Create Post</h1>

			<form
				className='flex flex-col  gap-2'
				onSubmit={handleSubmit}
			>
				<div>
					<label htmlFor='title'>Title</label>
					<input
						className='border-2 border-gray-500'
						type='text'
						name='title'
						id='title'
					/>
				</div>
				<div>
					<label htmlFor='content'>Content</label>
					<textarea
						className='border-2 border-gray-500'
						name='content'
						id='content'
						cols={30}
						rows={10}
					></textarea>
				</div>
				<button
					className='bg-blue-500 text-white'
					type='submit'
				>
					Create
				</button>
			</form>
		</div>
	);
}
