'use client';
import { PostRepository } from '@/gateways/PostRepository';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const repo = new PostRepository();

  const { push } = useRouter();

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		try {
			const title = event.target.title.value;
			const content = event.target.content.value;

			if (title === '' || content === '') {
				alert('Please fill all fields');
				return;
			}

			await axios('/api/post', {
				method: 'POST',
				data: {
					title,
					content,
				},
			});

			alert('Post created');
			push('/');
		} catch (err) {
			console.error(err);
		}
	};

  return (
    <div className=" max-w-xl container mx-auto ">
      <div className=" w-full">
        <p className="text-center text-neutral-600 text-base font-light">
          Create Post
        </p>
        <div className="mt-10">
          <form action="" className="px-10" onSubmit={handleSubmit}>
            <div className="mt-2 ">
              <label
                htmlFor="title"
                className="text-neutral-600 text-base font-normal"
              >
                Post Title :
              </label>
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="mt-6 ">
              <label
                htmlFor="content"
                className="text-neutral-600 text-base font-normal"
              >
                Content :
              </label>
              <div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
                <textarea
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  id="content"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
