import styles from './indicators.module.scss';

/* eslint-disable-next-line */
export interface IndicatorsProps {}

export function Indicators(props: IndicatorsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Indicators!</h1>
    </div>
  );
}

export default Indicators;
