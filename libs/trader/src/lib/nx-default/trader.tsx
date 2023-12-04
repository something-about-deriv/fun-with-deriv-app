import { Route, Link } from 'react-router-dom';

import styles from './trader.module.scss';

/* eslint-disable-next-line */
export interface TraderProps {}

export function Trader(props: TraderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Trader!</h1>

      <ul>
        <li>
          <Link to="/">libs/trader/src/lib/trader root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/trader/src/lib/trader root route.</div>}
      />
    </div>
  );
}

export default Trader;
