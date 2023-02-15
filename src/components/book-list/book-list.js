import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import { bookLoaded } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner/spinner";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, bookLoaded } = this.props;
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ bookLoaded }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );
