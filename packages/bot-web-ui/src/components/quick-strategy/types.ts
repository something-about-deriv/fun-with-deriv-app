export type TDurationItemRaw = {
    display: string;
    unit: string;
    min: number;
    max: number;
};

export type TFormData = {
    [key: string]: string | number | boolean;
};

export type TValidationType = 'min' | 'max' | 'required' | 'number' | 'ceil' | 'floor';

export interface ValidationObject {
    getMessage: (min: number | string) => string;
}

export type TValidationItem =
    | TValidationType
    | ({
          type: TValidationType;
          value: number | string;
      } & ValidationObject);

export type TConfigItem = {
    type: string;
    name?: keyof TFormData;
    fullWidth?: boolean;
    dependencies?: string[];
    label?: string;
    description?: string;
    attached?: boolean;
    hide?: string[];
    validation?: TValidationItem[];
    should_have?: {
        key: string;
        value: string | number | boolean;
    }[];
};

export type TStrategy = {
    name: string;
    label: string;
    description: string;
    fields: TConfigItem[][];
};

export type TStrategies = {
    [key: string]: TStrategy;
};
