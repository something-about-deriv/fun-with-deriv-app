export const populateVerificationStatus = (account_status) => {
  const { attempts, document, identity, needs_verification } =
    account_status.authentication;

  const identity_status = identity.status;
  const document_status = document.status;

  const allow_document_upload = account_status.status.some(
    (status) => status === 'allow_document_upload'
  );
  const allow_poi_resubmission = account_status.status.some(
    (status) => status === 'allow_poi_resubmission'
  );
  const allow_poa_resubmission = account_status.status.some(
    (status) => status === 'allow_poa_resubmission'
  );
  const is_age_verified = account_status.status.some(
    (status) => status === 'age_verification'
  );
  const is_idv_disallowed = account_status.status.some(
    (status) => status === 'idv_disallowed'
  );
  const poa_address_mismatch = account_status.status.some(
    (status) => status === 'poa_address_mismatch'
  );

  const has_poa = !(document && document.status === 'none');
  const has_poi = !(identity && identity.status === 'none');
  const has_submitted_poa =
    document_status === 'pending' && !allow_poa_resubmission;
  const needs_poa =
    Boolean(needs_verification.length) &&
    needs_verification.includes('document');
  const needs_poi =
    Boolean(needs_verification.length) &&
    needs_verification.includes('identity');

  const { idv, onfido, manual } = identity.services;
  const identity_last_attempt = attempts.latest;
  const has_attempted_idv = Boolean(
    attempts.history.length && attempts.history.find((h) => h.service === 'idv')
  );

  return {
    allow_document_upload,
    allow_poa_resubmission,
    allow_poi_resubmission,
    has_attempted_idv,
    has_poa,
    has_poi,
    has_submitted_poa,
    identity_last_attempt,
    identity_status,
    document_status,
    idv,
    is_age_verified,
    is_idv_disallowed,
    manual,
    needs_poa,
    needs_poi,
    needs_verification,
    onfido,
    poa_address_mismatch,
  };
};
