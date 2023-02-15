import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { name, author, price, coverImage } = book;
  return (
    <React.Fragment>
      <div className="book-list-item">
        <div className="book-cover">
          <img src={coverImage} alt="cover"></img>
        </div>
        <div className="book-details">
          {
            //eslint-disable-next-line
            <a href="#" className="book-title">
              {name}
            </a>
          }
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button className="btn btn-info add-to-cart">Add to cart</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookListItem;
