import React from 'react';
import { Popover, useOnClickOutside } from '@deriv/components';
import { TPopoverProps } from '@deriv/components';
import { isMobile } from '@deriv/shared';

/**
 * A component that renders a popover with an info icon.
 *
 * @param {TPopoverProps} props - Props for the popover component.
 * @returns React.ReactElement - A React component.
 */
export const FormFieldInfo = (props: Omit<TPopoverProps, 'alignment'>) => {
  const [is_open, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const validateClickOutside = (event: MouseEvent) => {
    const target = event?.target as HTMLElement;
    if (target.tagName === 'A') {
      event?.stopPropagation();
      return false;
    }
    return !ref.current?.contains(target);
  };

  useOnClickOutside(ref, () => setIsOpen(false), validateClickOutside);
  return (
    <div ref={ref}>
      <Popover
        message={''}
        {...props}
        data_testid="dt_form-field-info__popover"
        className="form-field-info__popover"
        icon="info"
        disable_message_icon
        zIndex="9999"
        is_open={is_open}
        onClick={() => setIsOpen((prev_is_open) => !prev_is_open)}
        alignment={isMobile() ? 'left' : 'right'}
      />
    </div>
  );
};
