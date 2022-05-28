import { createSlice } from "@reduxjs/toolkit";

interface ActionA<T> {
  index: string;
  text: string;
}
const initialState = {
  question: 0,
  answers: ["", "", "", ""],
};
export const answSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeAnswer: (state, action) => {
      state.answers[state.question] = action.payload;
    },
    changeQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAnswer, changeQuestion } = answSlice.actions;

export default answSlice.reducer;
