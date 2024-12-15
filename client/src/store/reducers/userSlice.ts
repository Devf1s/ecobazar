import { createSlice } from "@reduxjs/toolkit";
import { User } from '@/types/models/User';

interface UserState {
	isAuth: boolean;
	user: User;
	page: number;
	totalCount: number;
	limit: number;
}

const initialState: UserState = {
	isAuth: false,
	user: {
		id: '',
		email: '',
		password: '',
		isActivated: false
	},
	page: 1,
	totalCount: 0,
	limit: 15
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuth(state, action) {
			state.isAuth = action.payload;
		},
		setUser(state, action) {
			state.isAuth = action.payload;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
		setTotalCount: (state, action) => {
			state.totalCount = action.payload;
		}
	},
});

export const { setIsAuth, setUser, setPage, setTotalCount } = userSlice.actions;
export default userSlice.reducer;