'use client';
import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { getPostById, updatePost } from '@/use-cases/Post';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Post } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';

type UpdatePostProps = {
	postId: string;
};

export default function UpdatePost({ postId }: UpdatePostProps) {
	const repo = useMemo(() => {
		return new PostRepositoryClient();
	}, []);
	const [post, setPost] = useState<Post | null>(null);
	const { push } = useRouter();

	useEffect(() => {
		const getPost = async () => {
			const post = await getPostById(repo, postId);
			setPost(post);
		};

		getPost();
	}, [postId, repo]);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		try {
			const title = event.target.title.value;
			const content = event.target.content.value;

			await updatePost(repo, postId, { title, content });

			alert('Post updated successfully');
			push('/');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className=' max-w-xl container mx-auto '>
			{!post && <div>Loading...</div>}
			{post && (
				<div className=' w-full'>
					<p className='text-center text-neutral-600 text-2xl font-semi-bold'>
						Update Post
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
										defaultValue={post.title}
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
										defaultValue={post.content!}
									/>
								</div>
							</div>

							<button
								type='submit'
								className='block mx-auto bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-1/2 py-3 mt-12'
							>
								Update
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
