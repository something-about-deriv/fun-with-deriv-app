import React from 'react';
import { observer } from 'mobx-react-lite';

import { DesktopWrapper, MobileWrapper, Text } from '@deriv/components';
import { daysSince, isMobile } from '@deriv/shared';

import { Localize } from 'Components/i18next';
import RecommendedBy from 'Components/recommended-by';
import StarRating from 'Components/star-rating';
import TradeBadge from 'Components/trade-badge';
import UserAvatar from 'Components/user/user-avatar';
import BlockUserCount from 'Pages/advertiser-page/block-user/block-user-count';
import MyProfilePrivacy from 'Pages/my-profile/my-profile-stats/my-profile-privacy/my-profile-privacy';
import { useStores } from 'Stores';

const MyProfileName = () => {
    const { general_store } = useStores();

    const {
        basic_verification,
        buy_orders_count,
        created_time,
        full_verification,
        rating_average,
        rating_count,
        recommended_average,
        recommended_count,
        sell_orders_count,
    } = general_store.advertiser_info;

    const joined_since = daysSince(created_time);
    // rating_average_decimal converts rating_average to 1 d.p number
    const rating_average_decimal = rating_average ? Number(rating_average).toFixed(1) : null;

    return (
        <div className='my-profile-name'>
            <UserAvatar
                className='my-profile-name__avatar'
                nickname={general_store.nickname}
                size={isMobile() ? 32 : 64}
                text_size={isMobile() ? 's' : 'sm'}
            />
            <div className='my-profile-name__name'>
                <div className='my-profile-name__privacy'>
                    <div className='my-profile-name__column'>
                        <Text color='prominent' weight='bold'>
                            {general_store.nickname}
                        </Text>
                        <MobileWrapper>
                            <div className='my-profile-name__row'>
                                <Text
                                    className='my-profile-name__rating__row'
                                    color='less-prominent'
                                    size={isMobile() ? 'xxxs' : 'xs'}
                                >
                                    {joined_since ? (
                                        <Localize
                                            i18n_default_text='Joined {{days_since_joined}}d'
                                            values={{ days_since_joined: joined_since }}
                                        />
                                    ) : (
                                        <Localize i18n_default_text='Joined today' />
                                    )}
                                </Text>
                            </div>
                        </MobileWrapper>
                        <div className='my-profile-name__rating'>
                            <DesktopWrapper>
                                <Text
                                    className='my-profile-name__rating__row'
                                    color='less-prominent'
                                    size={isMobile() ? 'xxxs' : 'xs'}
                                >
                                    {joined_since ? (
                                        <Localize
                                            i18n_default_text='Joined {{days_since_joined}}d'
                                            values={{ days_since_joined: joined_since }}
                                        />
                                    ) : (
                                        <Localize i18n_default_text='Joined today' />
                                    )}
                                </Text>
                            </DesktopWrapper>
                            {rating_average ? (
                                <React.Fragment>
                                    <div className='my-profile-name__rating__row'>
                                        <Text color='prominent' size={isMobile() ? 'xxxs' : 'xs'}>
                                            {rating_average_decimal}
                                        </Text>
                                        <StarRating
                                            empty_star_icon='IcEmptyStar'
                                            full_star_icon='IcFullStar'
                                            initial_value={rating_average_decimal}
                                            is_readonly
                                            number_of_stars={5}
                                            should_allow_hover_effect={false}
                                            star_size={isMobile() ? 9 : 12}
                                        />
                                        <div className='my-profile-name__rating__text'>
                                            <Text color='less-prominent' size={isMobile() ? 'xxxs' : 'xs'}>
                                                {rating_count === 1 ? (
                                                    <Localize
                                                        i18n_default_text='({{number_of_ratings}} rating)'
                                                        values={{ number_of_ratings: rating_count }}
                                                    />
                                                ) : (
                                                    <Localize
                                                        i18n_default_text='({{number_of_ratings}} ratings)'
                                                        values={{ number_of_ratings: rating_count }}
                                                    />
                                                )}
                                            </Text>
                                        </div>
                                    </div>
                                    <div className='my-profile-name__rating__row'>
                                        <RecommendedBy
                                            recommended_average={recommended_average}
                                            recommended_count={recommended_count}
                                        />
                                    </div>
                                </React.Fragment>
                            ) : (
                                <div className='my-profile-name__rating__row'>
                                    <Text color='less-prominent' size={isMobile() ? 'xxxs' : 'xs'}>
                                        <Localize i18n_default_text='Not rated yet' />
                                    </Text>
                                </div>
                            )}
                            <DesktopWrapper>
                                <div className='my-profile-name__rating__row'>
                                    <BlockUserCount />
                                </div>
                            </DesktopWrapper>
                        </div>

                        <MobileWrapper>
                            <div className='my-profile-name__row'>
                                <div className='my-profile-name__rating__row'>
                                    <BlockUserCount />
                                </div>
                            </div>
                        </MobileWrapper>
                        <div className='my-profile-name__row'>
                            <TradeBadge
                                is_poa_verified={!!full_verification}
                                is_poi_verified={!!basic_verification}
                                trade_count={Number(buy_orders_count) + Number(sell_orders_count)}
                                large
                            />
                        </div>
                    </div>
                    <DesktopWrapper>
                        <MyProfilePrivacy />
                    </DesktopWrapper>
                </div>
            </div>
        </div>
    );
};

export default observer(MyProfileName);
