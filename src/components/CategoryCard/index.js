import './index.scss';

const CategoryCard = ({title, placeholderTitle}) => {
  return (
    <div className="category-card-container">
      <div className="card-item">{placeholderTitle}</div>
      <p className="title">{title}</p>
    </div>
  );
}

export default CategoryCard;