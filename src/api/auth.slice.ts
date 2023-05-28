import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgRegisterType, AuthApi, ArgLoginType, LoginResponseType, RegisterResponseType } from "./auth.api.ts";
import { createAppAsyncThunk } from "@/common/create-app-async-thunk";

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
};

//
const register = createAsyncThunk<void, ArgLoginType, AsyncThunkConfig>(
  THUNK_PREFIXES.REGISTER,
  (arg: ArgRegisterType) => {
    AuthApi.register(arg)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.error(res);
      });
  }
);

const login = createAsyncThunk(THUNK_PREFIXES.LOGIN, (arg: ArgLoginType) => {
  AuthApi.login(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as LoginResponseType | null,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: LoginResponseType }>) => {
      state.profile = action.payload.profile;
    },
  },
});

export const authReducer = slice.reducer;
//Санки давайте упакуем в объект, нам это пригодится в дальнейшем
export const authThunks = { register, login };
