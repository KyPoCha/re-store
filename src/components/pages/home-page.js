import React from "react";
import BooksListContainer from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BooksListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
