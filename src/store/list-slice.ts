import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, Items } from "../modal/items";

type SliceState = Items;

const initialState: SliceState = {
  items: [
    {
      id: "",
      gender: "",
      age: "",
      job: "",
      detail: [
        {
          date: "",
          description: "",
        },
      ],
    },
  ],
  change: false,
};

const listSlice = createSlice({
  name: "dataStorage",
  initialState,
  reducers: {
    receiveData(state, action: PayloadAction<Items>) {
      state.items = action.payload.items;
    },

    addData(state, action: PayloadAction<Item>) {
      const newData = action.payload.items;
      state.change = true;

      const findData = state.items.find(
        (items) =>
          items.gender === newData.gender &&
          items.age === newData.age &&
          items.job === newData.job
      );

      if (findData) {
        findData.detail.push({
          date: newData.detail.date,
          description: newData.detail.description,
        });

        const updateDataList = state.items.reduce<any>(
          (prev, cur) =>
            cur.id === findData.id ? [...prev, findData] : [...prev, cur],
          []
        );

        state.items = updateDataList;
      } else {
        state.items.push({
          id: newData.id,
          gender: newData.gender,
          age: newData.age,
          job: newData.job,
          detail: [
            {
              date: newData.detail.date,
              description: newData.detail.description,
            },
          ],
        });
      }

      console.log(state.items);
    },

    removeData(state, action: PayloadAction<Item>) {
      state.items.filter((item) => item.id !== action.payload.items.id);
    },
  },
});

export const listAction = listSlice.actions;
export default listSlice;