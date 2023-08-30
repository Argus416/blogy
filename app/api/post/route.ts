import { PostRepository } from '@/gateways/PostRepository';
import { createPost } from '@/use-cases/Post';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: NextApiResponse) {
	try {
		const { title, content } = await req.json();
		const repo = new PostRepository();

		await createPost(repo, { title, content });

		return new Response('Post was created', { status: 201 });
	} catch (err: any) {
		return new Response(err.message, { status: 500 });
	}
}
