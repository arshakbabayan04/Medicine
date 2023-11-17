import { configureStore } from "@reduxjs/toolkit";
import medicine from "../components/newMedicine/medicineSlice";

export const store = configureStore({
    reducer: {
        medicine,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
