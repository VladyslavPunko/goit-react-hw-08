import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
