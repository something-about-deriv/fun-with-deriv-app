import { useMemo } from 'react';
import useQuery from '../useQuery';
import useSettings from './useSettings';

/** Custom hook to get states list for a particular country. */
type TStatesList = NonNullable<ReturnType<typeof useSettings>['data']['residence' | 'country']>;

const useStatesList = (country: TStatesList) => {
    const { data, ...rest } = useQuery('states_list', {
        // @ts-expect-error The `states_list` type from `@deriv/api-types` is not correct.
        // The type should be `string`, but it's an alias to string type.
        payload: { states_list: country },
    });

    const modified_states_list = useMemo(() => [...(data?.states_list || [])], [data?.states_list]);

    return {
        /** The states list for the given country. */
        data: modified_states_list,
        ...rest,
    };
};

export default useStatesList;
