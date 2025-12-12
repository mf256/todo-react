import { Item } from '../interfaces/Item';

interface ItemProps {
  key: number;
  index: number;
  item: Item;
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const ItemRow = (props: ItemProps): JSX.Element => {
  const { index, item, onToggle, onDelete } = props;

  const handleToggle = () => {
    onToggle(index);
  };
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="w-full flex justify-between py-2">
      <div className="basis-14 text-white">{index + 1}</div>
      <div className="basis-8">
        <input
          className=""
          type="checkbox"
          value=""
          id={'checkboxitem-' + index}
          onClick={handleToggle}
        />
      </div>
      <div className="basis-1/2 flex-grow text-white">
        <label htmlFor={'checkboxitem-' + index} className={item.isCompleted ? 'line-through' : ''}>
          {item.name}
        </label>
      </div>
      <div className="basis-1/6 flex justify-end">
        <button
          className="text-white font-bold bg-red-400 px-2 py-1 rounded"
          type="button"
          onClick={handleDelete}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemRow;
