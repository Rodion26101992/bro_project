import './index.scss';
import percentsBackground from '../../../../../../assets/images/percentsBackground.png';
import seventy from '../../../../../../assets/images/70.png';
import eighty from '../../../../../../assets/images/80.png';
import ninety from '../../../../../../assets/images/90.png';
import { CircleEnum } from '../../types/Circle';
import { Trans } from 'react-i18next';

type Props = {
  titleKey: string;
  value: CircleEnum;
};

export const Circle = ({ value, titleKey }: Props) => {
  const checkPercentageImage = () => {
    switch (value) {
      case CircleEnum.SEVENTY:
        return seventy;
      case CircleEnum.EIGHTY:
        return eighty;
      case CircleEnum.NINETY:
        return ninety;
      default:
        return undefined;
    }
  };

  return (
    <div className="CircleContainer">
      <div
        className="Circle"
        style={{
          background: `url(${checkPercentageImage()}) no-repeat top 0 right 0, url(${percentsBackground}) no-repeat`,
        }}
      >
        {value}
      </div>

      <div className="title">
        <Trans i18nKey={titleKey} />
      </div>
    </div>
  );
};
