import { observer, useStore } from '@deriv/stores';
import { withRouter } from 'react-router';
import React from 'react';
import BinaryRoutes from 'Components/Routes';
import ErrorComponent from 'Components/Errors';
import { TRoutes } from 'Types';

const Routes = observer(({ passthrough }: TRoutes) => {
  const { client, common } = useStore();
  const { is_logged_in, is_logging_in } = client;
  const { error, has_error } = common;
  if (has_error) {
    return <ErrorComponent {...error} />;
  }

  return (
    <BinaryRoutes
      is_logged_in={is_logged_in}
      is_logging_in={is_logging_in}
      passthrough={passthrough}
    />
  );
});

// @ts-expect-error TODO: fix this
export default withRouter(Routes);
