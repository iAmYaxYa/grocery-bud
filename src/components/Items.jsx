import Item from "./Item";

const Items = ({ items, removeItem, completeItem }) => {
  return (
    <div className="items">
      {items?.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
