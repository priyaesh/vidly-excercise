import React, { Component } from "react";

const ListGroup = (props) => {
  console.log(props);
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelected,
    selectedGenre,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelected(item)}
          className={
            selectedGenre === item
              ? "list-group-item active"
              : "list-group-item"
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
