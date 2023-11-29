import { useState } from "react";

const Item = ({ item, removeItem, completeItem }) => {
  const { completed, id, grocery } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        id={id}
        value={completed}
        checked={completed}
        onChange={() => completeItem(id)}
      />
      <label htmlFor={id}>
        <p style={{ textDecoration: completed && "line-through" }}>
          {item?.grocery ?? "Unknown grocery"}
        </p>
      </label>
      <button
        className="remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
