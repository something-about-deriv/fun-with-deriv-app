import { useMemo } from 'react';
import { useStore } from '@deriv/stores';

const useFeatureFlags = () => {
  const { feature_flags } = useStore();

  const result = useMemo(() => {
    // Safe to do null assertions here as we are setting default values in the store.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const flags = feature_flags.data!;

    return Object.keys(flags).reduce(
      (previous, current) => ({
        ...previous,
        [`is_${current}_enabled`]: Boolean(flags[current]),
      }),
      {} as Record<`is_${keyof typeof flags}_enabled`, boolean>
    );
  }, [feature_flags.data]);

  return result;
};
export default useFeatureFlags;
