import { PostRepositoryServer } from '@/gateways/server/PostRepositoryServer';
import { createPost, getPosts } from '@/use-cases/Post';
import { NextApiResponse } from 'next';

export async function GET() {
	try {
		const repo = new PostRepositoryServer();

		await getPosts(repo);

		return new Response('Post was created', { status: 201 });
	} catch (err: any) {
		return new Response(err.message, { status: 500 });
	}
}

export async function POST(req: Request, res: NextApiResponse) {
	try {
		const { title, content } = await req.json();
		const repo = new PostRepositoryServer();

		await createPost(repo, { title, content });

		return new Response('Post was created', { status: 201 });
	} catch (err: any) {
		return new Response(err.message, { status: 500 });
	}
}
