import { Route, Link } from 'react-router-dom';

import styles from './cashier.module.scss';

/* eslint-disable-next-line */
export interface CashierProps {}

export function Cashier(props: CashierProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cashier!</h1>

      <ul>
        <li>
          <Link to="/">libs/cashier/src/lib/cashier root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/cashier/src/lib/cashier root route.</div>
        }
      />
    </div>
  );
}

export default Cashier;
