import { Route, Link } from 'react-router-dom';

import styles from './account.module.scss';

/* eslint-disable-next-line */
export interface AccountProps {}

export function Account(props: AccountProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Account!</h1>

      <ul>
        <li>
          <Link to="/">libs/account/src/lib/account root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/account/src/lib/account root route.</div>
        }
      />
    </div>
  );
}

export default Account;
