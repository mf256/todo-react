import { Item } from '../interfaces/Item';
import ItemRow from './ItemRow';

interface ItemsListProps {
  items: Item[];
  onToggle: (index: number) => void;
  onDelete: (index: number) => void;
}

const ItemsList = (props: ItemsListProps) => {
  return (
    <div className="mt-3  [&>*:nth-child(even)]:bg-sky-900">
      {props.items.map((item, index) => (
        <ItemRow key={index} item={item} index={index} {...props} />
      ))}
    </div>
  );
};

export default ItemsList;
