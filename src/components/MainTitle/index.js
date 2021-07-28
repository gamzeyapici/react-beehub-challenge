import './index.scss';

const MainTitle = ({title}) => {
  return (
    <div className="main-title-container">
      <div className="container h-100 d-flex align-items-center">
          <h4>{title}</h4>
      </div>
    </div>
  );
}

export default MainTitle;