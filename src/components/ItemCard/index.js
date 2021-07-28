import './index.scss';

const ItemCard = ({title, photo}) => {
  return (
    <div className="item-card-container">
      <div className="card-item" style={{ backgroundImage: 'url('+ photo +')'}} />
      <p className="title">{title}</p>
    </div>
  );
}

export default ItemCard;