import { TToken } from './common.type';

export type TApiContext = {
    api_tokens: NonNullable<TToken[]> | undefined;
    deleteToken: (token: string) => Promise<void>;
    footer_ref: Element | DocumentFragment | undefined;
    overlay_ref: (...args: unknown[]) => unknown;
    toggleOverlay: () => void;
};
