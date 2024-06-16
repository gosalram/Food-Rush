import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //will pass to this function which is reducer function with name addItem (this will map to that action)
      //mutating the state here(directly)
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState= {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK -either mutate the existing state or return a new state
      state.items.length = 0; //original state =[]    state=[]won't work
      // return { items: [] }; //this is new object will be replaced inside originalState= { items:[s]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
