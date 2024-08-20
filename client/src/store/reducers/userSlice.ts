import { createSlice } from "@reduxjs/toolkit";

interface UserState {
	isAuth: boolean;
	user: {}
}

const initialState: UserState = {
	isAuth: true,
	user: {}
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