import { useEffect, useState, useCallback } from 'react';
import * as services from '../../services'

import MainTitle from '../../components/MainTitle';
import ItemCard from '../../components/ItemCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import './index.scss';

const Series = () => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [series, setSeries] = useState([]);

  const getSeries = useCallback(async () => {

    try {
      const series = await services.getSeries();

      setSeries(series);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setHasError(true);
    }
    
  }, []);


  useEffect(() => {
    getSeries();
  }, [getSeries]);

  return (
    <div className="series-page-container">
      <MainTitle title="Popular Series" />

      <div className="container">
        {loading ? <Loading /> : <div className="row seven-cols">
          {series.map((serie, i) => <div className="col-6 col-md-1 col-lg-2" key={i}>
            <ItemCard title={serie.title} photo={serie.images["Poster Art"].url} />
          </div>)}
        </div>}
        {hasError && <Error />}
      </div>
    </div>
  );
}

export default Series;