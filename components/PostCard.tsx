import { Post } from "@prisma/client";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="p-4 w-full md:w-1/2 lg:w-1/4 mb-12 border border-indigo-300 rounded-lg shadow-md mx-4">
      <div className="mt-4 text-center">
        <h2 className="title-font text-lg font-medium text-gray-900 mt-3">
          {post.title}
        </h2>
        <Link
          className="block mx-auto text-center bg-indigo-900 text-white px-3 py-1 rounded-md w-1/2 mt-4"
          href={`/post/${post.id}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}
