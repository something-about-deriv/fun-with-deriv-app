/* eslint-disable no-empty-pattern */
import React from 'react';
import { Button, Icon, Modal, Text } from '@deriv/components';
import { Localize } from 'Components/i18next';
import { useStores } from 'Stores';
import { useModalManagerContext } from 'Components/modal-manager/modal-manager-context';

const EmailVerificationModal = () => {
    const { order_store } = useStores();
    const { hideModal, is_modal_open } = useModalManagerContext();
    const [should_show_reasons_if_no_email, setShouldShowReasonsIfNoEmail] = React.useState(false);
    const { confirmOrderRequest, order_information } = order_store;

    return (
        <Modal
            className='email-verification-modal'
            is_open={is_modal_open}
            renderTitle={() => <></>}
            toggleModal={() => hideModal()}
            width='440px'
        >
            <Modal.Body className='email-verification-modal__body'>
                <Icon icon='IcEmailSentP2p' size='128' />
                <Text
                    align='center'
                    className='email-verification-modal--email__title'
                    color='prominent'
                    size='m'
                    weight='bold'
                >
                    <Localize i18n_default_text='Check your email' />
                </Text>
                <Text align='center' className='email-verification-modal--email__text' color='prominent' weight='bold'>
                    <Localize i18n_default_text='Hit the link in the email we sent you to authorise this transaction.' />
                </Text>
                <Text align='center' color='prominent'>
                    {/* TODO: Uncomment when time is available in BE response */}
                    <Localize i18n_default_text='The link will expire in 10 minutes.' />
                </Text>
                <Text
                    className='email-verification-modal__receive_email_text'
                    color='loss-danger'
                    onClick={() => setShouldShowReasonsIfNoEmail(true)}
                    size='xs'
                    weight='bold'
                >
                    <Localize i18n_default_text="Didn't receive the email?" />
                </Text>
                {should_show_reasons_if_no_email && (
                    <React.Fragment>
                        <div className='email-verification-modal__reason'>
                            <Icon icon='IcEmailSpam' size={36} />
                            <Text className='email-verification-modal__reason__text' color='prominent' size='xxs'>
                                <Localize i18n_default_text='The email is in your spam folder (sometimes things get lost there).' />
                            </Text>
                        </div>
                        <div className='email-verification-modal__reason'>
                            <Icon icon='IcEmail' size={36} />
                            <Text className='email-verification-modal__reason__text' color='prominent' size='xxs'>
                                <Localize i18n_default_text='You accidentally gave us another email address (usually a work or a personal one instead of the one you meant).' />
                            </Text>
                        </div>
                        <div className='email-verification-modal__reason'>
                            <Icon icon='IcEmailTypo' size={36} />
                            <Text className='email-verification-modal__reason__text' color='prominent' size='xxs'>
                                <Localize i18n_default_text='The email address you entered had a mistake or typo (happens to the best of us).' />
                            </Text>
                        </div>
                        <div className='email-verification-modal__reason'>
                            <Icon icon='IcEmailFirewall' size={36} />
                            <Text className='email-verification-modal__reason__text' color='prominent' size='xxs'>
                                <Localize i18n_default_text="We can't deliver the email to this address (usually because of firewalls or filtering)." />
                            </Text>
                        </div>
                    </React.Fragment>
                )}
            </Modal.Body>
            {should_show_reasons_if_no_email && (
                <Modal.Footer className='email-verification-modal__footer'>
                    <Button
                        large
                        primary
                        onClick={() => {
                            hideModal();
                            confirmOrderRequest(order_information.id);
                            setShouldShowReasonsIfNoEmail(false);
                        }}
                    >
                        <Localize i18n_default_text='Resend email' />
                        {/* TODO: Uncomment when time is available in BE response
                        <Localize i18n_default_text='Resend email {{remaining_time}}' values={{ remaining_time }} /> */}
                    </Button>
                </Modal.Footer>
            )}
        </Modal>
    );
};

export default EmailVerificationModal;
