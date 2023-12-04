import React, { useState } from 'react';
import ClosingAccountSteps from './closing-account-steps.js';
import ClosingAccountReason from './closing-account-reason.js';

const ClosingAccount = () => {
  const [render_close_account_reason, setRenderCloseAccountReason] =
    useState(false);
  const redirectToReasons = () => {
    setRenderCloseAccountReason(true);
  };
  const redirectToSteps = () => {
    setRenderCloseAccountReason(false);
  };

  return (
    <div className="closing-account">
      {render_close_account_reason ? (
        <ClosingAccountReason onBackClick={() => redirectToSteps()} />
      ) : (
        <ClosingAccountSteps redirectToReasons={() => redirectToReasons()} />
      )}
    </div>
  );
};

export default ClosingAccount;
