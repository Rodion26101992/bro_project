import './index.scss';
import Modaro from '../../assets/images/Morado.png';
import { Nav } from './components/Nav';
import { Trans } from 'react-i18next';

export const Header = () => {
  return (
    <header>
      <div className="greetingContainer">
        <img src={Modaro} alt="user" className="userAvatar" />

        <div className="greetings">
          <Trans i18nKey="nav.CristianMuñoz" />
        </div>
      </div>

      <Nav />

      <button className="contactMe">
        <Trans i18nKey="nav.ContactMe" />
      </button>
    </header>
  );
};
