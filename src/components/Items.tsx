import Item from './Item';

const Items = (props) => {
  return (
    <table className="table table-striped">
      <tbody>
        {props.items.map((item, index) => (
          <Item key={index} item={item} index={index} {...props} />
        ))}
      </tbody>
    </table>
  );
}

export default Items;
