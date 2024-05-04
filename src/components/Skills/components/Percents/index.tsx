import { Circle } from './components/Circle';
import './index.scss';
import { percentsRow1, percentsRow2 } from './constants/percents';

export const Percents = () => {
  return (
    <div className="Percents">
      <div className="row">
        {percentsRow1.map((el) => (
          <Circle {...el} key={el.titleKey} />
        ))}
      </div>

      <div className="line separator" />

      <div className="row">
        {percentsRow2.map((el) => (
          <Circle {...el} key={el.titleKey} />
        ))}
      </div>
    </div>
  );
};
