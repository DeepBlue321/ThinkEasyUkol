import { createSlice } from "@reduxjs/toolkit";

interface ActionA {
  payload: string;
}
interface ActionB {
  payload: number;
}
const initialState = {
  question: 0,
  answers: ["", "", "", ""],
};
export const answSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeAnswer: (state, action: ActionA) => {
      state.answers[state.question] = action.payload;
    },
    changeQuestion: (state, action: ActionB) => {
      state.question = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAnswer, changeQuestion } = answSlice.actions;

export default answSlice.reducer;
