import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Series from '../../pages/Series';

import './index.scss';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;