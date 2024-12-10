import { createSlice } from "@reduxjs/toolkit";
import { User } from '@/types/models/User';

interface UserState {
	isAuth: boolean;
	user: User;
}

const initialState: UserState = {
	isAuth: true,
	user: {
		id: '',
		email: '',
		password: '',
		isActivated: false
	}
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
	},
});

export const { setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;