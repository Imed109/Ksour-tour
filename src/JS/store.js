// store.js
import { configureStore } from "@reduxjs/toolkit";
import omraReducer from "./omraSlice";
import ferriesReducer from "./ferriesSlice"; // Import the ferriesSlice
import airlinesReducer from "./airlinesSlice";

const store = configureStore({
  reducer: {
    airlines: airlinesReducer,
    omra: omraReducer,
    ferries: ferriesReducer, // Include the ferries reducer in the store
  },
  // Add middleware, enhancers, or other configurations if needed
});

export default store;
