import React from 'react';
import { TooltipRenderProps } from '@deriv/react-joyride';
import CloseIcon from '../../public/images/close-icon.svg';
import { THooks } from '../../types';
import { WalletButton } from '../Base';
import { getDesktopSteps } from './DesktopSteps';
import { getMobileSteps } from './MobileSteps';
import './WalletTourGuide.scss';

export const walletsOnboardingLocalStorageKey = 'walletsOnboarding';
export const walletsOnboardingStartValue = 'started';

export const tourStepConfig = (
    isMobile: boolean,
    isDemoWallet: boolean,
    hasMT5Account: boolean,
    hasDerivAppsTradingAccount: boolean,
    isAllWalletsAlreadyAdded: boolean,
    walletIndex = 1
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any[] =>
    isMobile
        ? getMobileSteps(isDemoWallet, hasMT5Account, hasDerivAppsTradingAccount, isAllWalletsAlreadyAdded, walletIndex)
        : getDesktopSteps(
              isDemoWallet,
              hasMT5Account,
              hasDerivAppsTradingAccount,
              isAllWalletsAlreadyAdded,
              walletIndex
          );

export const TooltipComponent = ({
    backProps,
    closeProps,
    continuous,
    index,
    isLastStep,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
}: TooltipRenderProps) => {
    return (
        <div {...tooltipProps} className='wallets-tour-guide__container'>
            <div className='wallets-tour-guide__header'>
                {step?.title as React.ReactNode}
                <CloseIcon
                    className='wallets-tour-guide__close-icon'
                    onClick={skipProps.onClick as unknown as React.MouseEventHandler<SVGElement>}
                />
            </div>
            {<div className='wallets-tour-guide__content'>{step.content as React.ReactNode}</div>}
            <div className='wallets-tour-guide__footer'>
                {index > 0 && <WalletButton {...backProps} color='white' text='Back' variant='outlined' />}
                {continuous && <WalletButton {...primaryProps} text={isLastStep ? 'Done' : 'Next'} />}
                {!continuous && <WalletButton {...closeProps} text='Close' />}
            </div>
        </div>
    );
};

export const getFiatWalletLoginId = (wallets?: THooks.WalletAccountsList[]) => {
    return wallets?.find(wallet => !wallet.is_crypto)?.loginid;
};

export const getWalletIndexForTarget = (loginid?: string, wallets?: THooks.WalletAccountsList[]) => {
    return (wallets?.findIndex(wallet => wallet.loginid === loginid) ?? 0) + 1;
};
