// ferriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const ferriesSlice = createSlice({
  name: "ferries",
  initialState: {
    ships: [
      {
        name: "CTN",
        image:
          "https://kapitalis.com/tunisie/wp-content/uploads/2022/06/Compagnie-tunisienne-de-navigation-CTN.jpg",
        description:
          "La Compagnie tunisienne de navigation (CTN) est une compagnie tunisienne de navigation maritime assurant des liaisons régulières entre la Tunisie et les ports de Marseille et Gênes",
      },
      {
        name: "CORSICA",
        image:
          "https://i0.wp.com/travelboulevard.be/wp-content/uploads/2023/06/corsica-linea-logo-720x340-1.png?fit=720%2C340&ssl=1",
        description:
          "CORSICA linea est une compagnie maritime assurant des liaisons avec la France continentale, la Corse, l'Algérie, la Tunsie et la Sardaigne.",
      },
      {
        name: "GNV",
        image:
          "https://boxcoupon.it/wp-content/uploads/2021/06/GNV-logo-boxcoupon.png",
        description:
          "GNV est une importante compagnie de navigation maritime italienne assurant le transport de passagers, de véhicules et de fret sur des liaisons maritimes reliant l'Italie continentale à la Sicile, la Sardaigne, l'Espagne, le Maroc, la Tunisie et l'Albanie et est également présente sur les lignes entre la France, l'Espagne et le Maroc.",
      },
      
      // Add more initial ships if needed
    ],
  },
  reducers: {
    addShip(state, action) {
      state.ships.push(action.payload);
    },
    removeShip(state, action) {
      state.ships = state.ships.filter((ship) => ship.name !== action.payload);
    },
    // Add more actions as needed
  },
});

export const { addShip, removeShip } = ferriesSlice.actions;
export default ferriesSlice.reducer;
