import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { Trans } from 'react-i18next';

const Localize = ({
  i18n_default_text,
  values,
  components,
  options,
  i18n,
  shouldUnescape,
}) => (
  <Trans
    i18n={i18n}
    defaults={i18n_default_text}
    values={values}
    components={components}
    tOptions={options}
    shouldUnescape={shouldUnescape}
  />
);

// Trans needs to have the i18n instance in scope
// eslint-disable-next-line react/display-name
const withI18n =
  (i18n) =>
  (props: {
    i18n_default_text: string;
    values?: object;
    components?: ReactNode[];
    options?: object;
    i18n?: typeof i18n;
    shouldUnescape?: boolean;
  }) =>
    <Localize i18n={i18n} {...props} />;

Localize.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node),
  i18n: PropTypes.object.isRequired,
  i18n_default_text: PropTypes.string,
  options: PropTypes.object,
  values: PropTypes.object,
  shouldUnescape: PropTypes.bool,
};

export default withI18n;
