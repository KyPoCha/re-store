const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
};

const updatedCartItems = (cartItems, item, indx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, indx), ...cartItems.slice(indx + 1)];
  }

  if (indx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, indx), item, ...cartItems.slice(indx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, name = book.name, total = 0 } = item;
  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find(({ id }) => bookId === id);
  const itemIndx = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndx];
  const newItem = updateCartItem(book, item, quantity);
  return {
    ...state,
    cartItems: updatedCartItems(cartItems, newItem, itemIndx),
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_ERROR":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
