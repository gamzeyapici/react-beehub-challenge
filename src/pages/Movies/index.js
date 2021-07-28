import { useEffect, useState, useCallback } from 'react';
import * as services from '../../services'

import MainTitle from '../../components/MainTitle';
import ItemCard from '../../components/ItemCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import './index.scss';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async () => {

    try {
      const movies = await services.getMovies();

      setMovies(movies);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setHasError(true);
    }

  }, []);


  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movies-page-container">
      <MainTitle title="Popular Movies" />

      <div className="container">
        {loading ? <Loading /> : <div className="row seven-cols">
          {movies.map((movie, i) => <div className="col-6 col-md-1 col-lg-2" key={i}>
            <ItemCard title={movie.title} photo={movie.images["Poster Art"].url} />
          </div>)}
        </div>}
        {hasError && <Error />}
      </div>
    </div>
  );
}

export default Movies;