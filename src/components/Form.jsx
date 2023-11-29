import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [grocery, setGrocery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!grocery) {
      toast.error("grocery is required");
      return;
    }
    const newItem = { id: nanoid(), grocery, completed: false };
    addItem(newItem);
    setGrocery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
