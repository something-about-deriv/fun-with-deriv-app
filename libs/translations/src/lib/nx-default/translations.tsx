import styles from './translations.module.scss';

/* eslint-disable-next-line */
export interface TranslationsProps {}

export function Translations(props: TranslationsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Translations!</h1>
    </div>
  );
}

export default Translations;
