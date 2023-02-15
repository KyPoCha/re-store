const bookLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const bookRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

export { bookLoaded, bookRequested };
