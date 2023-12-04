import { Route, Link } from 'react-router-dom';

import styles from './wallets.module.scss';

/* eslint-disable-next-line */
export interface WalletsProps {}

export function Wallets(props: WalletsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Wallets!</h1>

      <ul>
        <li>
          <Link to="/">libs/wallets/src/lib/wallets root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/wallets/src/lib/wallets root route.</div>
        }
      />
    </div>
  );
}

export default Wallets;
