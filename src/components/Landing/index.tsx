import './index.scss';
import { Header } from '@components/Header';
import { Home } from '@components/Home';
import { Skills } from '@components/Skills';

export const Landing = () => (
  <div className="Landing">
    <Header />

    <Home />

    <Skills />
  </div>
);
