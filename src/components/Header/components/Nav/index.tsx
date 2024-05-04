import './index.scss';
import { Trans } from 'react-i18next';
import { links } from './constants/links';

// TODO: temporary
const activeRoute = '/home';

export const Nav = () => {
  return (
    <nav>
      <ul>
        {links.map((el) => {
          const isActive = activeRoute === el.route;

          return (
            <li key={el.titleKey}>
              <a
                href={el.route}
                className={isActive ? 'activeText' : ''}
              >
                <Trans i18nKey={el.titleKey} />
              </a>

              {isActive && <span className="activeLink" />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
