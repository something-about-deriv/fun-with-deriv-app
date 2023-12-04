import { Route, Link } from 'react-router-dom';

import styles from './appstore.module.scss';

/* eslint-disable-next-line */
export interface AppstoreProps {}

export function Appstore(props: AppstoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Appstore!</h1>

      <ul>
        <li>
          <Link to="/">libs/appstore/src/lib/appstore root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/appstore/src/lib/appstore root route.</div>
        }
      />
    </div>
  );
}

export default Appstore;
