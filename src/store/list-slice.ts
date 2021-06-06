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
          id: "",
          date: "",
          description: "",
        },
      ],
    },
  ],
  change: false,
  deleteTrigger: false,
  showSuccess: false,
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
          id: newData.detail.id,
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
              id: newData.detail.id,
              date: newData.detail.date,
              description: newData.detail.description,
            },
          ],
        });
      }
    },

    changeDeleteTriggerDefault(state, action: PayloadAction<string>) {
      state.deleteTrigger = action.payload === "true" ? true : false;
    },

    removeData(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) =>
        item.detail.some((item) => item.id === action.payload)
      );
      const indexDetail = state.items[index].detail.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[index].detail.length === 1) {
        const updateList = state.items.reduce<any>((prev, cur) => cur.id !== state.items[index].id ? [...prev, cur] : [...prev], []);
        state.items = updateList;
        state.deleteTrigger = true;
      } else {
        state.items[index].detail.splice(indexDetail, 1);
        state.deleteTrigger = false;
      }

      state.change = true;
    },

    showSuccess(state, action: PayloadAction<string>) {
      state.showSuccess = action.payload === "true" ? true : false;
    },
  },
});

export const listAction = listSlice.actions;
export default listSlice;
