// hotelsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    list: [
      {
        name: "Hotel A",
        image: "image_url_A",
        description: "Description for Hotel A",
      },
      {
        name: "Hotel B",
        image: "image_url_B",
        description: "Description for Hotel B",
      },
      // Add more initial hotels if needed
    ],
  },
  reducers: {
    addHotel(state, action) {
      state.list.push(action.payload);
    },
    removeHotel(state, action) {
      state.list = state.list.filter((hotel) => hotel.name !== action.payload);
    },
    // Add more actions as needed
  },
});

export const { addHotel, removeHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;
