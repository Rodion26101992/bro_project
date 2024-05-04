import './index.scss';
import { Trans } from 'react-i18next';
import contactButton from '../../assets/images/contactButton.svg';

export const Home = () => {
  return (
    <div className="Home">
      <div className="myNameCristian">
        <Trans i18nKey="Home.MyNameCristian" /> 🎨
      </div>

      <div className="description">
        <Trans i18nKey="Home.description" />
      </div>

      <div className="contactMeContainer">
        <button className="contactMe">
          <span>
            ¡<Trans i18nKey="Nav.ContactMe" />!
            <img src={contactButton} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};
