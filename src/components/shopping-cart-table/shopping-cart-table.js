import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-small"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <button
            className="btn btn-outline-success btn-small"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            className="btn btn-outline-warning btn-small"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`INCREASE ${id}`);
    },
    onDecrease: (id) => {
      console.log(`DECREASE ${id}`);
    },
    onDelete: (id) => {
      console.log(`DELETE ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
