import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json(); // `await` eklemeyi unutmayın
  return data;
});

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {}, // reducers kısmı boş olmalıdır, eğer bir reducer tanımlamanız gerekirse buraya ekleyin
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload; // `action.payloid` yerine `action.payload` olmalıdır
    });
  },
});

export default categorySlice.reducer;


/*Sonuç olarak, getCategories eylemi, API'den kategori verilerini almak için kullanılır ve bu veriyi Redux store'da bulunan categories state'ine ekler. Bu sayede uygulamadaki diğer bileşenler, Redux store'dan bu kategori verilerini alarak kullanabilir ve görüntüleyebilir. */