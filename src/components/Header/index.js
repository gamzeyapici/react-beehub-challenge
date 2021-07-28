import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <header>
      <div className="header-inner container h-100 d-flex align-items-center justify-content-between">
        <Link to="/">
          <h2>DEMO Streaming</h2>
        </Link>
        <ul>
          <li><a href="/">Log in</a></li>
          <li><a href="/" className="trial-button">Start your free trial</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;