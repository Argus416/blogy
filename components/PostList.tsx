'use client';
import { useAppSelector } from '@/redux/hooks';
import { Post } from '@prisma/client';
import _ from 'lodash';
import PostCard from './PostCard';

export default async function PostList() {
  const repo = new PostRepository();

  const posts = await getPosts(repo);

  function chunkArray(array: FomratedPost[], chunkSize: number) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const chunkedPosts = chunkArray(posts, 4);

  return (
    <div>
		{
			_.isEmpty(posts) ? (
				<div className='text-center text-2xl text-neutral-600 font-semibold'>
					No posts found
				</div>
				:chunkedPosts.map((postChunk, index) => (
					<div
					  key={index}
					  className={`flex ${
						postChunk.length < 4 ? "justify-center" : "justify-between"
					  }`}
					>
					  {postChunk.map((post Post) => (
						<PostCard key={post.id} post={post} />
					  ))}
					</div>
				  ))
				
		}

        
    </div>
  );
}
