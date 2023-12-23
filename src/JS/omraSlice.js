// omraSlice.js
import { createSlice } from "@reduxjs/toolkit";

const omraSlice = createSlice({
  name: "omra",
  initialState: {
    offers: [{
      title: "Standard Package",
      description: "Basic accommodation and travel package for Umrah.",
      price: "$1000",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      title: "Premium Package",
      description: "Luxury accommodation and travel package for Umrah.",
      price: "$2000",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
   ], // Initial list of Omra offers
  },
  reducers: {
    addOffer(state, action) {
      state.offers.push(action.payload);
    },
    removeOffer(state, action) {
      state.offers = state.offers.filter((offer) => offer.title !== action.payload.title);
    },
    // Add more actions as needed
  },
});

export const { addOffer, removeOffer } = omraSlice.actions;
export default omraSlice.reducer;
