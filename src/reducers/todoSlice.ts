import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getTodos } from "../api/async";
 

export type TTodo = {
    id: number;
    title: string;
    complete: boolean;
}

interface IInitialState {
    list: TTodo[];
}

const initialState: IInitialState = {
    list: []
    
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
    extraReducers(builder) {
        // builder.addCase(getTodos.pending);
        builder.addCase(getTodos.fulfilled, (state: IInitialState, action: PayloadAction<TTodo[]>) => {
              state.list= action.payload
        });
        // builder.addCase(getTodos.rejected, (state: IInitialState) => {
            
        // });
        
  }
});

export const { } = todoSlice.actions;



export default todoSlice.reducer;
