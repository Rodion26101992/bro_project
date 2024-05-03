import './index.scss';
import { Trans } from 'react-i18next';
import contactButton from '../../assets/images/contactButton.svg';

export const Home = () => {
  return (
    <div className="Home">
      <div className="myNameCristian">
        <Trans i18nKey="home.MyNameCristian" /> 🎨
      </div>

      <div className="description">
        <Trans i18nKey="home.description" />
      </div>

      <div className="contactMeContainer">
        <button className="contactMe">
          <span>
            ¡<Trans i18nKey="nav.ContactMe" />!
            <img src={contactButton} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};
