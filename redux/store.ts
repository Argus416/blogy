import { configureStore } from '@reduxjs/toolkit';
import postReducer from '@/redux/reducers/postSlice';

export const store = configureStore({
	reducer: {
		postReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
