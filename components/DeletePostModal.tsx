import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { useAppDispatch } from '@/redux/hooks';
import { filterPosts } from '@/redux/reducers/postSlice';
import { deletePost } from '@/use-cases/Post';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';

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
export default DeletePostModal;
