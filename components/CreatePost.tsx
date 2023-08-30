'use client';
import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { createPost } from '@/use-cases/Post';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CreatePost() {
	const repo = new PostRepositoryClient();

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

			createPost(repo, { title, content });

			alert('Post created');
			push('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className=' max-w-xl container mx-auto '>
			<div className=' w-full'>
				<p className='text-center text-neutral-600 text-2xl font-semi-bold'>
					Create Post
				</p>
				<div className='mt-10'>
					<form
						action=''
						className='px-10'
						onSubmit={handleSubmit}
					>
						<div className='mt-2 '>
							<label
								htmlFor='title'
								className='text-neutral-600 text-base font-normal'
							>
								Post Title :
							</label>
							<div className='flex my-3 items-center justify-between bg-zinc-100 rounded-lg  '>
								<Input
									id='title'
									name='title'
								/>
							</div>
						</div>

						<div className='mt-9 '>
							<label
								htmlFor='content'
								className='text-neutral-600 text-base font-normal'
							>
								Content :
							</label>
							<div className='flex my-3 items-center justify-between bg-zinc-100 rounded-lg  '>
								<Textarea
									id='content'
									name='content'
								/>
							</div>
						</div>

						<button
							type='submit'
							className='block mx-auto bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-1/2 py-3 mt-12'
						>
							Create
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
