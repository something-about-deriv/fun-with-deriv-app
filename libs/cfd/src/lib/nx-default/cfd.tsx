import { Route, Link } from 'react-router-dom';

import styles from './cfd.module.scss';

/* eslint-disable-next-line */
export interface CfdProps {}

export function Cfd(props: CfdProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cfd!</h1>

      <ul>
        <li>
          <Link to="/">libs/cfd/src/lib/cfd root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/cfd/src/lib/cfd root route.</div>}
      />
    </div>
  );
}

export default Cfd;
