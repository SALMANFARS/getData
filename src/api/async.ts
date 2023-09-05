import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const api = "https://dummyjson.com/products";


//get


export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async () =>{
        try {
            const { data } = await axios.get(api)
            console.log(data.products);
            
            return data.products;
            
        } catch (error) {
            console.log(error);
            
        }
    }

)