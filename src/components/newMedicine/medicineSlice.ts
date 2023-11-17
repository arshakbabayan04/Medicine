import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Medicine } from "../../types";
export interface comentState {
    comment: string;
    email: string;
    cid?: string;
}

interface medicineState {
    medicines: Medicine[];
    comments: comentState[];
}
const initialState: medicineState = {
    medicines: [
        {
            id: "1",
            name: "Nimesil",
            price: 5.5,
            value: 4,
            company: "farmed",
            descr: "Nimesulide is a non-steroidal anti-inflammatory drug, a drug from the sulfonanilide class. Indications for use: treatment of acute pain, symptomatic treatment of osteoarthritis and primary dysmenorrhea in women and girls over 12 years of age.",
        },
        {
            id: "2",
            name: "Amoxicillin",
            price: 6,
            value: 6,
            company: "farmed",
            descr: "Amoxicillin is a drug, a semi-synthetic broad-spectrum antibiotic of the penicillin group for the treatment of bacterial infections. These include middle ear infection, sore throat, pneumonia, skin infections and urinary tract infections. It is taken orally or, less commonly, by injection.",
        },
    ],
    comments: [],
};

export const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {
        createMedicine(state, action: PayloadAction<Medicine>) {
            state.medicines.push(action.payload);
        },
        createComment(state, action: PayloadAction<comentState>) {
            state.comments.push(action.payload);
        },
    },
});

export const { createMedicine, createComment } = medicineSlice.actions;

export default medicineSlice.reducer;
