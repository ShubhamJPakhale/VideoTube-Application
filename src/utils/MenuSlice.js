import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
  name: "Menu",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeHambergerMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeHambergerMenu } = MenuSlice.actions;
export default MenuSlice.reducer;
