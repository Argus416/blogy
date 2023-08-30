import { PostRepositoryServer } from '@/gateways/server/PostRepositoryServer';
import { getPostById } from '@/use-cases/Post';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { postId: string } }) {
	try {
		const repo = new PostRepositoryServer();

		const data = await getPostById(repo, params.postId);

		return NextResponse.json(data, { status: 200 });
	} catch (err: any) {
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
