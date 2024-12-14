import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./map-slice";
import layerSlice from "./layer-slice";

export const store = configureStore({
  reducer: {
    map: mapSlice,
    layers: layerSlice,
  },
});

export default store;