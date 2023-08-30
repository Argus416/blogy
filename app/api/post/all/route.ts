import { PostRepositoryServer } from '@/gateways/server/PostRepositoryServer';
import { getPosts } from '@/use-cases/Post';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const repo = new PostRepositoryServer();

		const data = await getPosts(repo);

		return NextResponse.json(data, { status: 200 });
	} catch (err: any) {
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
