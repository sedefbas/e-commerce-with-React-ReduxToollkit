import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

export const addLogin = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Metinsel hata içeriğini alın
        console.log("Sunucudan dönen metinsel içerik:", errorText);
        console.log("Sunucudan gelen hata durum kodu:", response.status);
        throw new Error(
          errorText || "Kullanıcı girişi sırasında bir hata oluştu"
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Kullanıcı girişi sırasında bir hata oluştu:thunk", error);
      throw new Error("Kullanıcı girişi sırasında bir hata oluştu:thunk");
    }
  }
);

const initialState = {
  logins: [],
  loginStatus: null,
  loginStatus: STATUS.IDLE,
};

const loginSlice = createSlice({
  name: "logins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addLogin.pending, (state, action) => {
      state.loginStatus = STATUS.LOADING;
  })
      .addCase(addLogin.fulfilled, (state, action) => {
        state.logins.push(action.payload);
        state.loginStatus = STATUS.SUCCESS;

        console.log(
          "Kullanıcı başarıyla oluşturuldu: loginSlice",
          action.payload
        );
      })
      .addCase(addLogin.rejected, (state, action) => {
        console.log(
          "Kullanıcı girişi sırasında bir hata oluştu:LoginSlice",
          action.error.message
        );
      });
  },
});

export default loginSlice.reducer;
