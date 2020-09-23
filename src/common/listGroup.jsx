import React, { Component } from "react";

const ListGroup = (props) => {
  console.log(props);
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelected,
    selectedItem,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelected(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
