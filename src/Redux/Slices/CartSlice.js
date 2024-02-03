import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    carts: []
}


export const addToCart = createAsyncThunk('/cart', async (e) => {
    const response = axiosInstance.post(`/cart/register`, e);
    toast.promise(response, {
        loading: 'Adding to the cart',
        success: 'Successfully added to the cart',
        error: 'Error while adding to the cart'
    });

    return (await response).data;
})

export const getCart = createAsyncThunk('/cart', async () => {
    const response = axiosInstance.get(`/cart`);
    toast.promise(response, {
        loading: 'Loading your cart',
        success: 'Cart Loaded Successfully',
        error: 'Error while adding to the cart'
    });

    return (await response).data;
})

export const deleteFromCart = createAsyncThunk('/delete', async (id) => {
    const response = axiosInstance.delete(`/cart/delete/${id}`);
    toast.promise(response, {
        loading: 'Deleting from the cart',
        success: 'Successfully deleted from the cart',
        error: 'Error while deleting from the cart'
    });

    return (await response).data;
})

export const deleteWholeCart = createAsyncThunk('/delete/all', async () => {
    const response = axiosInstance.delete('/cart/delete/all');

    toast.promise(response, {
        loading: 'Deleting all cart items',
        success: 'Successfully deleted all items from the cart',
        error: 'Error while deleting from the cart'
    });

    return (await response).data;

})
// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        increment: (state, action) => {
            const productId = action.payload.data.productId;
            const updatedCarts = state.carts.map((item) =>
                item.productId === productId ? { ...item, qnty: item.qnty + 1 } : item
            );

            state.carts = updatedCarts;

        },

        // // remove perticular iteams
        removeToCart: (state, action) => {
            const productId = action.payload.data.productId;
            const updatedCarts = state.carts.filter((item) => item.productId !== productId);
            // Update the state with the new array of carts
            state.carts = updatedCarts;
            // const data = state.carts.filter((ele)=>ele.id !== action.payload);
            // state.carts = data
        },

        // // remove single iteams
        removeSingleItem: (state, action) => {
            const productId = action.payload.data.productId;
            const updatedCarts = state.carts.map((item) =>
                item.productId === productId ? { ...item, qnty: item.qnty - 1 } : item
            );
            state.carts = updatedCarts;
        },

        // clear cart
        emptycartItems: (state, action) => {
            state.carts = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                state.carts = [...action.payload.carts];
            });
        builder
            .addCase(deleteWholeCart.fulfilled, (state, action) => {
                state.carts = [];
            })
    }


});

// export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;
export const { emptycartItems, removeSingleItem, removeToCart, increment } = cartSlice.actions;
export default cartSlice.reducer;