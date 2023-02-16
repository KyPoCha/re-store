const bookLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const bookRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const bookError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(bookRequested());
  bookstoreService
    .getBooks()
    .then((data) => {
      dispatch(bookLoaded(data));
    })
    .catch((err) => {
      dispatch(bookError(err));
    });
};

export { fetchBooks };
