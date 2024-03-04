import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initalState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initalState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      //console.log(action);
    },
    resetDestination: (state, action) => {
      state.destinationSelected = null;
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia , (state,action) => {
      state.destinationSelected = null;
    });
 },
});

export const { destinationClicked, resetDestination } = destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
