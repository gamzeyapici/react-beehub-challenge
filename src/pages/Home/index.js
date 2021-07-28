import {Link} from "react-router-dom";

import CategoryCard from '../../components/CategoryCard';
import MainTitle from '../../components/MainTitle';
import './index.scss';

const Home = () => {
  return (
    <div className="home-page-container">
      <MainTitle title="Popular Titles" />

      <div className="container">
        <div className="row">
          <div className="col-auto">
            <Link to="/series">
              <CategoryCard placeholderTitle="SERIES" title="Popular Series" />
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/movies">
              <CategoryCard placeholderTitle="MOVIES" title="Popular Movies" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;