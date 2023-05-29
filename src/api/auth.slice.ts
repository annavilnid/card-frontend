import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, AuthApi, LoginResponseType } from "./auth.api.ts";

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
};

//
const register = createAsyncThunk(THUNK_PREFIXES.REGISTER, (arg: ArgRegisterType, thunkAPI) => {
  AuthApi.register(arg)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res);
    });
});

const login = createAsyncThunk(THUNK_PREFIXES.LOGIN, (arg: ArgLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  AuthApi.login(arg)
    .then((res) => {
      dispatch(authActions.setProfile({ profile: res.data }));
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
      console.log(state, "state");
      state.profile = action.payload.profile;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     state.profile = action.payload.profile;
  //   });
  // },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
//Санки давайте упакуем в объект, нам это пригодится в дальнейшем
export const authThunks = { register, login };
