// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk('user/createUser', async (userData) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("response 200 değil")
      throw new Error(errorData.message);
    }

    const data = await response.json();
    console.log("veriler apiden geldi.", data);
    return data;
  } catch (error) {
    console.error("Hata oluştu: ", error);
    throw new Error("Kullanıcı oluşturma sırasında bir hata oluştu.");
  }
});

 /* 
 export const createUser = createAsyncThunk('user/createUser', async (userData) => {
  
  const response = await fetch("https://fakestoreapi.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    
  }).then(rest=>{
    console.log(rest);

  }).catch(error=>{
    console.log("hata oluştu sorgu");
  });  

 console.log("veriler apiden geldi.",userData) }); */

 export const getUser = createAsyncThunk("getUsers", async () => {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  return data;
});


// userSlice'ı oluşturun
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        console.log("Kullanıcı başarıyla oluşturuldu: userSlice", action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Kullanıcı oluşturma işlemi başarısız: ", action.error.message);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
