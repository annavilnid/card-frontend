import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "./auth.api.ts";

const register = createAsyncThunk(
  // 1 - prefix
  "auth/register",
  // 2 - callback (условно наша старая санка), в которую:
  // - первым параметром (arg) мы передаем аргументы необходимые для санки
  // (если параметров больше чем один упаковываем их в объект)
  // - вторым параметром thunkAPI, обратившись к которому получим dispatch и др. свойства
  // https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
  (arg, thunkAPI) => {
    AuthApi.then((res) => {
      debugger;
    });
  }
);

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const authReducer = slice.reducer;
// Санки давайте упакуем в объект, нам это пригодится в дальнейшем
export const authThunks = { register };
