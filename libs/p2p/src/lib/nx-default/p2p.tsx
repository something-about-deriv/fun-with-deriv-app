import { Route, Link } from 'react-router-dom';

import styles from './p2p.module.scss';

/* eslint-disable-next-line */
export interface P2pProps {}

export function P2p(props: P2pProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to P2p!</h1>

      <ul>
        <li>
          <Link to="/">libs/p2p/src/lib/p2p root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the libs/p2p/src/lib/p2p root route.</div>}
      />
    </div>
  );
}

export default P2p;
