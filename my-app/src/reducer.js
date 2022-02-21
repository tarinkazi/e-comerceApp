export const initialState = {basket:[],};


//selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer =(state, action) => {
 // console.log(action)
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state, basket: [...state.basket, action.item],
      };
      default:
        return state;
  }
}

export default reducer;
