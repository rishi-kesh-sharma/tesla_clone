import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cars:["Modes S","Modex 3","Model x","Model Y"]
}

const carsSlice=createSlice({
    name:"car",
    initialState,
    reducers:{}
})
export const selectCars=state=>state.car.cars;
export default carsSlice.reducer;