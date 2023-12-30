import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeTab: false,
    theme: "bg-[#000300]",
  },
  reducers: {
    toggleThemeTab: (state) => {
      state.themeTab = !state.themeTab;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme, toggleThemeTab } = themeSlice.actions;
export const themeTab = (state) => state.theme.themeTab;
export const selectTheme = (state) => state.theme.theme;

export default themeSlice;
