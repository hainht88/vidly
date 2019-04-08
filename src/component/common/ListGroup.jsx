import React from "react";

const ListGroup = ({ data, currentItem, onClick }) => {
  return (
    <div className="list-group">
      {data.map(item => (
        <button
          key={item._id}
          type="button"
          className={
            currentItem === item.name
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onClick(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
