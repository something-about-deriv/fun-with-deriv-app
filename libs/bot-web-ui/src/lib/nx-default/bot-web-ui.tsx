import { Route, Link } from 'react-router-dom';

import styles from './bot-web-ui.module.scss';

/* eslint-disable-next-line */
export interface BotWebUiProps {}

export function BotWebUi(props: BotWebUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BotWebUi!</h1>

      <ul>
        <li>
          <Link to="/">libs/bot-web-ui/src/lib/bot-web-ui root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>This is the libs/bot-web-ui/src/lib/bot-web-ui root route.</div>
        }
      />
    </div>
  );
}

export default BotWebUi;
