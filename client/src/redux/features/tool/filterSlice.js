import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredTools: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_TOOLS(state, action) {
      const { tools, search } = action.payload;
      const tempTools = tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(search.toLowerCase()) ||
          tool.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredTools = tempTools;
    },
  },
});

export const { FILTER_TOOLS } = filterSlice.actions;

export const selectFilteredTools = (state) => state.filter.filteredTools;

export default filterSlice.reducer;
