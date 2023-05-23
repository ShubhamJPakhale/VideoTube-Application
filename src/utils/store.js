import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: { Menu: MenuSlice, Search: SearchSlice },
});

export default store;
