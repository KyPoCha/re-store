import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { bookLoaded, bookRequested } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner/spinner";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, bookLoaded, bookRequested } = this.props;
    bookRequested();
    bookstoreService.getBooks().then((data) => {
      bookLoaded(data);
    });
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner></Spinner>;
    }
    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />{" "}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = { bookLoaded, bookRequested };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );
