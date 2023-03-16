import { createSlice } from "@reduxjs/toolkit";

const employersSlice = createSlice({
	name: "employers",
	initialState: {
		employers: [],
		employer: [],
		loading: false,
      errorData:''
	},
	reducers: {
		getEmployers: (state) => {
			state.loading = true;
		},
		setEmployers: (state, action) => {
			state.employers = action.payload;
		},
		getEmployer: (state) => {
			state.loading = true;
		},
		setEmployer: (state, action) => {
			state.employer = action.payload;
		},
		setLoading:(state) => {
			state.loading = true
		},
		unSetLoading: (state) => {
			state.loading = false;
		},
      setErrorData:(state,action) => {
         state.errorData = action.payload
      }
	},
});

export const employersReducer = employersSlice.reducer;
export const {
   getEmployers,
   setEmployers,
   getEmployer,
   setEmployer,
	setLoading,
   unSetLoading,
   setErrorData
} = employersSlice.actions;