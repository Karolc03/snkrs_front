import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cartItems = state.cartItems.length > 0 ? state.cartItems: [{
        id: 1,
        name: "Adidas",
        price: 75.99,
         type: "SPLV-350",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d31131033b54e67b045ab2f017c6cda_9366/Tenis_Superstar_UNISEX_Blanco_FU7714_01_standard.jpg",
         color: ["🔴"],
         category: "ACCESSORIES",
          size: "4",
          gener: "women",
          stock: 55,
          quantity: 2
      },
      {
        id: 2,
        name: "nike",
        price: 75.99,
         type: "SPLV-350",
        image: "https://www.sportline.com.co/media/catalog/product/d/m/dm9922-200-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
         color: ["🟢"],
         category: "ACCESSORIES",
          size: "4",
          gener: "women",
          stock: 55,
          quantity: 1
      },
      {
        id: 3,
        name: "Yeezy",
        price: 50.99,
         type: "SPLV-350",
        image: "https://i.ebayimg.com/images/g/4zEAAOSwHQpkGHw1/s-l1200.jpg",
         color: ["⚫️"],
         category: "ACCESSORIES",
          size: "4",
          gener: "men",
          stock: 20,
          quantity: 3
      }];
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
   
    // removeFromCart: (state, action) => {
    //   state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    itemIncrement: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    itemDecrement:(state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    }
  },
});

export const getCartItems = () => async (dispatch) => {
  try {
    dispatch(getCart());
      // const response = await axios.get(`${URL}/cart/`, );
      // dispatch(getCart(response.data)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};

export const addCartItemsById = (item) => async (dispatch) => {
  try {
      // const response = await axios.post(`${URL}/cart/${item.id}`, );
      dispatch(addToCart(item)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }

};
export const removeCartItemsById = (item) => async (dispatch) => {
  try {
      // const response = await axios.delete(`${URL}/cart/${item.id}`, );
      dispatch(removeFromCart(item)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};

export const clearCartCartItemsById = () => async (dispatch) => {
  try {
      // const response = await axios.put(`${URL_FINDHOTEL}/cart/`, );
      dispatch(clearCart()); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};
export const { getCart, addToCart, removeFromCart, clearCart,itemIncrement,itemDecrement } = cartSlice.actions;
export default cartSlice.reducer;