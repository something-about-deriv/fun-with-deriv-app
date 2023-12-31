import * as React from 'react';
import { Loading } from '@deriv/components';
import { observer } from 'mobx-react-lite';
import { localize } from 'Components/i18next';
import PageReturn from 'Components/page-return';
import { useStores } from 'Stores';
import CreateAdForm from './create-ad-form.jsx';

const CreateAd = () => {
    const { my_ads_store } = useStores();

    const onClickBack = () => {
        my_ads_store.setApiErrorMessage('');
        my_ads_store.setShowAdForm(false);
    };
    return (
        <React.Fragment>
            <PageReturn onClick={onClickBack} page_title={localize('Create new ad')} />
            {my_ads_store.is_form_loading ? <Loading is_fullscreen={false} /> : <CreateAdForm />}
        </React.Fragment>
    );
};

export default observer(CreateAd);
