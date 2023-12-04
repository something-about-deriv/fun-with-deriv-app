import { Route, Link } from 'react-router-dom';

import styles from './reports.module.scss';

/* eslint-disable-next-line */
export interface ReportsProps {}

export function Reports(props: ReportsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Reports!</h1>

      <ul>
        <li>
          <Link to="/">libs/reports/src/lib/reports root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/reports/src/lib/reports root route.</div>
        }
      />
    </div>
  );
}

export default Reports;
