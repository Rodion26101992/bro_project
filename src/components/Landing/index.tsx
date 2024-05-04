import './index.scss';
import { Header } from '../Header';
import { Home } from '../Home';
import { Skills } from '../Skills';

export const Landing = () => (
  <div className="Landing">
    <Header />

    <Home />

    <Skills />
  </div>
);
