export const cartReducer = (state, action) => {
     switch (action.type) {

          case 'addToCart':
               return { ...state, cart: [...state.cart, { ...action.payload.val, qty: 1 }], totalDiscount: action.payload.discount }

          case 'removeFromCart':
               return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id), totalDiscount: action.payload.discount }

          case 'addToWishlist':
               return { ...state, wishlist: [...state.wishlist,  action.payload ] }

          case "increaseQTY":
               return { ...state, cart: state.cart.filter((c) => (c.id === action.payload.id) ? c.qty = (action.payload.qty) : c.qty) }

          case "decreaseQTY":
               return { ...state, cart: state.cart.filter((c) => (c.id === action.payload.id) ? (c.qty === 1 ? c.qty = 1 : c.qty = action.payload.qty) : c.qty) }

          case 'clearCart':
               return { ...state, cart: [] }

          default:
               return state;
     };
}

export const productReducer = (state, action) => {
     switch (action.type) {
          case 'byPrice':
               return { ...state, sortPrice: action.payload }

          case 'byName':
               return { ...state, sortName: action.payload }

          case 'searchByName':
               return { ...state, search: action.payload }

          case 'clearFilters':
               return {
                    search: "",
                    sortPrice: false,
                    sortName: false
               }

          default:
               return state;
     }
}