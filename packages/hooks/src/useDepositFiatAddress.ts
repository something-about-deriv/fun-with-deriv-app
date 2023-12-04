import { useCallback, useEffect } from 'react';
import { useRequest } from '@deriv/api';
import { useStore } from '@deriv/stores';

const useDepositFiatAddress = () => {
    const { ui } = useStore();
    const { is_dark_mode_on } = ui;
    const { data, mutate, ...rest } = useRequest('cashier');
    const dark_mode = is_dark_mode_on ? 'on' : 'off';
    const deposit_iframe_url = typeof data?.cashier === 'string' ? `${data?.cashier}&DarkMode=${dark_mode}` : undefined;

    const send = useCallback(() => mutate({ payload: { cashier: 'deposit', provider: 'doughflow' } }), [mutate]);

    useEffect(() => {
        send();
    }, [send]);

    return {
        ...rest,
        resend: send,
        data: deposit_iframe_url,
    };
};

export default useDepositFiatAddress;
