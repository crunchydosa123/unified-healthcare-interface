import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;  // Increase counter by 1
    },
    decrement: (state) => {
      state.value -= 1;  // Decrease counter by 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;  // Increase counter by payload value
    },
  },
});

// Export actions so they can be used in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer to be used in the store
export default counterSlice.reducer;
