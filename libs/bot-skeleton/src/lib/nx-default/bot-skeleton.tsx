import styles from './bot-skeleton.module.scss';

/* eslint-disable-next-line */
export interface BotSkeletonProps {}

export function BotSkeleton(props: BotSkeletonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BotSkeleton!</h1>
    </div>
  );
}

export default BotSkeleton;
