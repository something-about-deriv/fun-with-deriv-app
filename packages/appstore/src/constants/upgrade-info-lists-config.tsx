import React from 'react';
import { Text } from '@deriv/components';
import { Localize } from '@deriv/translations';

type TUpgradeInformationList = {
    is_eu: boolean;
    text_info_size: string;
    form_line_height: string;
};

const getUpgradeInformationList = ({ is_eu, text_info_size, form_line_height }: TUpgradeInformationList) => [
    {
        name: 'upgrade_info',
        visibility: true,
        content: (
            <Localize i18n_default_text='During the upgrade, deposits, withdrawals, transfers, and adding new accounts will be unavailable.' />
        ),
    },
    {
        name: 'open_positions',
        visibility: true,
        content: <Localize i18n_default_text="Your open positions won't be affected and you can continue trading." />,
    },
    {
        name: 'deriv_p2p',
        visibility: !is_eu,
        content: (
            <Localize
                i18n_default_text='<0>Deriv P2P</0> is unavailable in Wallets at this time.'
                components={<Text weight='bold' size={text_info_size} line_height={form_line_height} key={0} />}
            />
        ),
    },
    {
        name: 'payment_agents',
        visibility: !is_eu,
        content: (
            <Localize
                i18n_default_text="You can use <0>Payment agents'</0> services to deposit by adding a Payment Agent Wallet after the upgrade."
                components={<Text weight='bold' size={text_info_size} line_height={form_line_height} key={0} />}
            />
        ),
    },
];

export default getUpgradeInformationList;
