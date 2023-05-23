import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
  name: "Menu",
  initialState: {
    isMenuOpen: true,
    isButtonListVisible: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeHambergerMenu: (state) => {
      state.isMenuOpen = false;
    },
    hideButtonList: (state) => {
      state.isButtonListVisible = !state.isButtonListVisible;
    },
  },
});

export const { toggleMenu, closeHambergerMenu, hideButtonList } =
  MenuSlice.actions;
export default MenuSlice.reducer;
