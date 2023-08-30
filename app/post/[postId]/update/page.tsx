import UpdatePost from '@/components/UpdatePost';

type indexProps = {
	params: { postId: string };
};

export default function index({ params }: indexProps) {
	return <UpdatePost postId={params.postId} />;
}
