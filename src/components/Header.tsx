import logo from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const logoClick = () => {
    navigate('/');
  };

  return (
    <header>
      <div className="logo" onClick={logoClick}>
        <img src={logo} alt="logo" />
        <h1>PlayNow</h1>
      </div>
      <div className="players">
        <Link to="/players">
          <span>Количество игроков</span>
        </Link>
      </div>
    </header>
  );
};
