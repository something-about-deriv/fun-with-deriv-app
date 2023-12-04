import { Route, Link } from 'react-router-dom';

import styles from './api.module.scss';

/* eslint-disable-next-line */
export interface ApiProps {}

export function Api(props: ApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Api!</h1>

      <ul>
        <li>
          <Link to="/">libs/api/src/lib/api root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/api/src/lib/api root route.</div>}
      />
    </div>
  );
}

export default Api;
