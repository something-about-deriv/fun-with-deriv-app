import styles from './stores.module.scss';

/* eslint-disable-next-line */
export interface StoresProps {}

export function Stores(props: StoresProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stores!</h1>
    </div>
  );
}

export default Stores;
