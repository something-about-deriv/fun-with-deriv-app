import { getValidationRules, getMultiplierValidationRules } from '../validation-rules';
import { TTradeStore } from 'Types';
import { isTimeValid } from '@deriv/shared';
import { isSessionAvailable } from '../../Helpers/start-date';
import type { TRuleOptions } from 'Utils/Validator/validator';

type TExtendedRuleOptions = TRuleOptions & { condition: (store: TTradeStore) => boolean; message: string };

const mocked_store = {
    barrier_count: 2,
    contract_start_type: 'test_spot',
    form_components: ['barrier'],
    has_stop_loss: true,
    has_take_profit: true,
    stop_loss: false,
    start_date: 'start_date',
    take_profit: false,
} as unknown as TTradeStore;

const default_mocked_params: [TTradeStore['barrier_1'], Partial<TRuleOptions>, TTradeStore, TTradeStore] = [
    '123',
    'test' as unknown as Partial<TRuleOptions>,
    mocked_store,
    {
        barrier_1: '+123',
        barrier_2: '-123',
    } as TTradeStore,
];

const start_time_mocked_params: [string, Partial<TRuleOptions>, TTradeStore] = [
    null as unknown as string,
    'test' as unknown as Partial<TRuleOptions>,
    mocked_store,
];

const expiry_time_mocked_params: [string, Partial<TRuleOptions>, TTradeStore] = [
    null as unknown as string,
    'test' as unknown as Partial<TRuleOptions>,
    mocked_store,
];

jest.mock('@deriv/shared', () => ({
    ...jest.requireActual('@deriv/shared'),
    isTimeValid: jest.fn(() => false),
    toMoment: jest.fn(() => ({
        start_date: 'start_date',
        clone: jest.fn(() => ({ hour: jest.fn(() => ({ minute: jest.fn() })) })),
    })),
}));

jest.mock('../../Helpers/start-date', () => ({
    ...jest.requireActual('../../Helpers/start-date'),
    isSessionAvailable: jest.fn(() => false),
}));

describe('getMultiplierValidationRules', () => {
    const returned_validation_rules = getMultiplierValidationRules();

    it('should contain rules for stop_loss', () => {
        expect(returned_validation_rules).toHaveProperty('stop_loss');
        expect((returned_validation_rules.stop_loss.rules[0][1] as TExtendedRuleOptions).message).toBe(
            'Please enter a stop loss amount.'
        );
        expect((returned_validation_rules.stop_loss.rules[0][1] as TExtendedRuleOptions).condition(mocked_store)).toBe(
            true
        );
    });

    it('should contain rules for take_profit', () => {
        expect(returned_validation_rules).toHaveProperty('take_profit');
        expect((returned_validation_rules.take_profit.rules[0][1] as TExtendedRuleOptions).message).toBe(
            'Please enter a take profit amount.'
        );
        expect(
            (returned_validation_rules.take_profit.rules[0][1] as TExtendedRuleOptions).condition(mocked_store)
        ).toBe(true);
    });
});

describe('getValidationRules', () => {
    const returned_validation_rules = getValidationRules();

    it('should contain rules for amount', () => {
        expect(returned_validation_rules).toHaveProperty('amount');
        expect((returned_validation_rules.amount.rules?.[0][1] as TExtendedRuleOptions).message).toBe(
            'Amount is a required field.'
        );
    });

    it('should contain rules for barrier_1', () => {
        expect(returned_validation_rules).toHaveProperty('barrier_1');
        expect(
            (returned_validation_rules.barrier_1.rules?.[0][1] as TExtendedRuleOptions).condition(mocked_store)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_1.rules?.[1][1] as TExtendedRuleOptions).condition(mocked_store)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_1?.rules?.[2][1] as TExtendedRuleOptions).func?.(
                ...default_mocked_params
            )
        ).toBe(true);

        mocked_store.barrier_count = 1;
        expect(
            (returned_validation_rules.barrier_1.rules?.[2][1] as TExtendedRuleOptions).func?.(...default_mocked_params)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_1.rules?.[3][1] as TExtendedRuleOptions).func?.(...default_mocked_params)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_1.rules?.[3][1] as TExtendedRuleOptions).func?.(
                '123',
                'test' as unknown as Partial<TRuleOptions>,
                mocked_store,
                {
                    barrier_1: '123',
                    barrier_2: '123',
                } as TTradeStore
            )
        ).toBe(true);
    });

    it('should contain rules for barrier_2', () => {
        mocked_store.barrier_count = 2;

        expect(returned_validation_rules).toHaveProperty('barrier_2');
        expect(
            (returned_validation_rules.barrier_2.rules?.[0][1] as TExtendedRuleOptions).condition(mocked_store)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_2.rules?.[1][1] as TExtendedRuleOptions).condition(mocked_store)
        ).toBe(true);
        expect(
            (returned_validation_rules.barrier_2.rules?.[2][1] as TExtendedRuleOptions).func?.(...default_mocked_params)
        ).toBe(false);
        expect(
            (returned_validation_rules.barrier_2.rules?.[3][1] as TExtendedRuleOptions).func?.(...default_mocked_params)
        ).toBe(false);
    });

    it('should contain rules for duration', () => {
        expect(returned_validation_rules).toHaveProperty('duration');
        expect((returned_validation_rules.duration.rules?.[0][1] as TExtendedRuleOptions).message).toBe(
            'Duration is a required field.'
        );
    });

    it('should contain rules for start_date', () => {
        expect(returned_validation_rules).toHaveProperty('start_date');
        expect(returned_validation_rules.start_date.trigger).toBe('start_time');
    });

    it('should contain rules for expiry_date', () => {
        expect(returned_validation_rules).toHaveProperty('expiry_date');
        expect(returned_validation_rules.expiry_date.trigger).toBe('expiry_time');
    });

    it('should contain rules for start_time', () => {
        expect(returned_validation_rules).toHaveProperty('start_time');
        expect(
            (returned_validation_rules.start_time.rules?.[0][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(false);
        expect(
            (returned_validation_rules.start_time.rules?.[1][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(false);
        expect(
            (returned_validation_rules.start_time.rules?.[2][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(false);

        mocked_store.contract_start_type = 'spot';
        expect(
            (returned_validation_rules.start_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(true);

        mocked_store.contract_start_type = 'test_spot';
        expect(
            (returned_validation_rules.start_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(false);

        (isTimeValid as jest.Mock).mockReturnValueOnce(true);
        (isSessionAvailable as jest.Mock).mockReturnValueOnce(true);
        expect(
            (returned_validation_rules.start_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...start_time_mocked_params
            )
        ).toBe(true);
    });

    it('should contain rules for expiry_time', () => {
        expect(returned_validation_rules).toHaveProperty('expiry_time');
        expect(
            (returned_validation_rules.expiry_time.rules?.[0][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(false);
        expect(
            (returned_validation_rules.expiry_time.rules?.[1][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(false);
        expect(
            (returned_validation_rules.expiry_time.rules?.[2][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(false);

        mocked_store.contract_start_type = 'spot';
        expect(
            (returned_validation_rules.expiry_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(true);

        mocked_store.contract_start_type = 'test_spot';
        expect(
            (returned_validation_rules.expiry_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(false);

        (isTimeValid as jest.Mock).mockReturnValueOnce(true);
        (isSessionAvailable as jest.Mock).mockReturnValueOnce(true);
        expect(
            (returned_validation_rules.expiry_time.rules?.[3][1] as TExtendedRuleOptions).func?.(
                ...expiry_time_mocked_params
            )
        ).toBe(true);
    });
});
