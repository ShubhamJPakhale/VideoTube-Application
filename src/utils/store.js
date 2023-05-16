import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";

const store = configureStore({ reducer: { Menu: MenuSlice } });

export default store;
