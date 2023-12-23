import { createSlice } from "@reduxjs/toolkit";

const airlinesSlice = createSlice({
  name: "airlines",
  initialState: {
    list: [
      { name: "airtunise", image: "lien image" },
      { name: "nouvelair", image: "lien image" },
    ], // Initial list of companies
  },
  reducers: {
    addCompany(state, action) {
      state.list.push(action.payload);
    },
    removeCompany(state, action) {
      state.list = state.list.filter(
        (company) => company.name !== action.payload
      );
    },
    // Add more actions as needed
  },
});

export const { addCompany, removeCompany } = airlinesSlice.actions;
export default airlinesSlice.reducer;
