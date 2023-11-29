import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

const defaultItems = JSON.parse(localStorage.getItem("items")) ?? [];
const App = () => {
  const [items, setItems] = useState(defaultItems);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item successfully added");
  };
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item successfully removed");
  };

  const completeItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item successfully updated");
  };

  return (
    <main>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items
          items={items}
          removeItem={removeItem}
          completeItem={completeItem}
        />
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
