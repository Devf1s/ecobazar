import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import counterSlice from './reducers/counterSlice';

const reducers = {
	user: userSlice,
	count: counterSlice,
};

const rootReducer = combineReducers({
	...reducers
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore;