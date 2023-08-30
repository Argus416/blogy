import { PostRepository } from '@/gateways/PostRepository';
import { getPosts } from '@/use-cases/Post';
import { Post } from '@prisma/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postRepository = new PostRepository();

export const fetchPosts = createAsyncThunk('users/fetchUsers', async () => {
	const response = await getPosts(postRepository);
	return response;
});

const initialState: Post[] = [];

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},

	extraReducers(builder) {
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const {} = postSlice.actions;

export default postSlice.reducer;
