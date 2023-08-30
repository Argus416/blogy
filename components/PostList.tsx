import { getPosts } from "@/use-cases/Post";
import PostCard from "./PostCard";
import { PostRepository } from "@/gateways/PostRepository";
import { Suspense } from "react";
import { FomratedPost } from "@/entities/Post";

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
      <Suspense fallback={<div>Loading...</div>}>
        {chunkedPosts.map((postChunk, index) => (
          <div
            key={index}
            className={`flex ${
              postChunk.length < 4 ? "justify-center" : "justify-between"
            }`}
          >
            {postChunk.map((post: FomratedPost) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ))}
      </Suspense>
    </div>
  );
}
