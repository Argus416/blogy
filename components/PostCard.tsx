import { Post } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { deletePost } from '@/use-cases/Post';
import { useAppDispatch } from '@/redux/hooks';
import { filterPosts } from '@/redux/reducers/postSlice';

type PostCardProps = {
	post: Post;
};

const DeletePostModal = ({ postId }: { postId: string }) => {
	const repo = new PostRepositoryClient();
	const displatch = useAppDispatch();

	const deleteHandler = async () => {
		await deletePost(repo, postId);

		displatch(filterPosts(postId));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='destructive'>Delete</Button>
			</DialogTrigger>

			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this post?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button
						type='submit'
						variant={'destructive'}
						onClick={deleteHandler}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default function PostCard({ post }: PostCardProps) {
	const router = useRouter();

	return (
		<div className='p-4 w-full md:w-1/2 lg:w-1/4 mb-12 border border-indigo-300 rounded-lg shadow-md mx-4'>
			<div className='mt-4 text-center'>
				<h3 className='title-font mb-1 text-xs tracking-widest text-gray-900'>
					{post.id}
				</h3>
				<h2 className='title-font text-lg font-medium text-gray-900 mt-3'>
					{post.title}
				</h2>
				<div className='flex  gap-2  items-center justify-center'>
					<Button
						className='bg-indigo-900 hover:bg-indigo-900/75 text-white'
						onClick={() => router.push(`/post/${post.id}`)}
					>
						View
					</Button>

					<Button>Edit</Button>
					<DeletePostModal postId={post.id} />
					{/* <Button className='bg-red-500 text-white hover:bg-red-500/75'>
						Delete
					</Button> */}
				</div>
			</div>
		</div>
	);
}
