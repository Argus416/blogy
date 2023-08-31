import { PostRepositoryClient } from '@/gateways/client/PostRepositoryClient';
import { getPosts } from '@/use-cases/Post';
import { Post } from '@prisma/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postRepository = new PostRepositoryClient();

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await getPosts(postRepository);
	return response;
});

const initialState = {
	posts: [] as Post[],
};

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		filterPosts: (state, action) => {
			state.posts = state.posts.filter((post) => post.id !== action.payload);
		},
	},

	extraReducers(builder) {
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload;

			console.log(action.payload);
			return state;
		});
	},
});

// Action creators are generated for each case reducer function
export const { filterPosts } = postSlice.actions;

export default postSlice.reducer;
