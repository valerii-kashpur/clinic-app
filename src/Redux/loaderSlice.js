import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState: false,
  reducers: {
    setIsLoadingOn(state) {
      return (state = true);
    },
    setIsLoadingOff(state) {
      return (state = false);
    },
  },
});

export default loaderSlice.reducer;
export const { setIsLoadingOn, setIsLoadingOff } = loaderSlice.actions;
