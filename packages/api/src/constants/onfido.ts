import React from 'react';

export const ROOT_CLASS = 'manual-poi-details';

export const DOCUMENT_TYPES = {
    NATIONAL_IDENTITY_CARD: 'national_identity_card',
    NIMC_SLIP: 'nimc_slip',
    PASSPORT: 'passport',
    DRIVING_LICENCE: 'driving_licence',
    BIRTH_CERTIFICATE: 'birth_certificate',
    SELFIE_WITH_ID: 'selfie_with_id',
    OTHER: 'other',
};

const PAGE_TYPE = {
    FRONT: 'front',
    BACK: 'back',
    PHOTO: 'photo',
};

export const SELFIE_DOCUMENT = {
    document_type: DOCUMENT_TYPES.SELFIE_WITH_ID,
    pageType: PAGE_TYPE.PHOTO,
    name: 'selfie_with_id',
    icon: 'IcSelfie',
    info: 'Upload your selfie.',
};

export const date_field = {
    name: 'expiry_date',
    label: 'Expiry date',
    type: 'date',
    required: true,
};

export const ONFIDO_PHRASES = {
    country_select: {
        alert_dropdown: {
            country_not_found: 'Country not found',
        },
        alert: {
            another_doc:
                'Documents from that country are not currently supported — <fallback>try another document type</fallback>',
        },
        button_primary: 'Submit document',
        search: {
            accessibility: 'Select country',
            input_placeholder: 'e.g. United States',
            label: 'Search for country',
        },
        title: 'Select issuing country',
    },
    cross_device_checklist: {
        button_primary: 'Submit verification',
        info: 'Tips',
        list_item_doc_multiple: 'Documents uploaded',
        list_item_doc_one: 'Document uploaded',
        list_item_selfie: 'Selfie uploaded',
        subtitle: "We're now ready to verify your identity",
        title: "Great, that's everything we need",
    },
    cross_device_error_desktop: {
        subtitle: 'The link only works on mobile devices',
        title: "Something's gone wrong",
    },
    cross_device_error_restart: {
        subtitle: "You'll need to restart your verification on your computer",
        title: "Something's gone wrong",
    },
    cross_device_intro: {
        button_primary: 'Get secure link',
        list_accessibility: 'Steps required to continue verification on your mobile',
        list_item_finish: 'Check back here to finish the submission',
        list_item_open_link: 'Open the link and complete the tasks',
        list_item_send_phone: 'Send a secure link to your phone',
        subtitle: "Here's how to do it:",
        title: 'Continue on your phone',
    },
    cross_device_return: {
        body: 'Your computer may take a few seconds to update',
        subtitle: 'You can now return to your computer to continue',
        title: 'Uploads successful',
    },
    doc_confirmation: {
        alert: {
            blur_detail: 'Make sure everything is clear',
            blur_title: 'Blurry photo detected',
            crop_detail: 'Make sure full document is visible',
            crop_title: 'Cut-off image detected',
            glare_detail: 'Move away from direct light',
            glare_title: 'Glare detected',
            no_doc_detail: 'Make sure all of the document is in the photo',
            no_doc_title: 'No document detected',
        },
        body_id: 'Make sure your card details are clear to read, with no blur or glare',
        body_image_medium: 'It’ll take longer to verify you if we can’t read it',
        body_image_poor: 'To smoothly verify you, we need a better photo',
        body_license: 'Make sure your license details are clear to read, with no blur or glare',
        body_passport: 'Make sure your passport details are clear to read, with no blur or glare',
        body_permit: 'Make sure your permit details are clear to read, with no blur or glare',
        body_tax_letter: 'Make sure details are clear to read, with no blur or glare',
        button_close: 'Close',
        button_primary_redo: 'Redo',
        button_primary_upload: 'Confirm',
        button_primary_upload_anyway: 'Upload anyway',
        button_secondary_redo: 'Redo',
        button_zoom: 'Enlarge image',
        image_accessibility: 'Photo of your document',
        title: 'Check your image',
    },
    doc_select: {
        button_id: 'Identity card',
        button_id_detail: 'Front and back',
        button_license: "Driver's license",
        button_license_detail: 'Front and back',
        button_passport: 'Passport',
        button_passport_detail: 'Face photo page',
        button_permit: 'Residence permit',
        button_permit_detail: 'Front and back',
        extra_no_mobile: 'Sorry, no mobile phone bills',
        list_accessibility: 'Documents you can use to verify your identity',
        subtitle: 'It must be an official photo ID',
        subtitle_poa: 'These are the documents most likely to show your current home address',
        title: 'Choose document',
        title_poa: 'Select a %{country} document',
    },
    doc_submit: {
        button_link_upload: 'or upload photo – no scans or photocopies',
        button_primary: 'Continue on phone',
        subtitle: 'Take a photo with your phone',
        title_id_back: 'Submit identity card (back)',
        title_id_front: 'Submit identity card (front)',
        title_license_back: 'Submit license (back)',
        title_license_front: 'Submit license (front)',
        title_passport: 'Submit passport photo page',
        title_permit_back: 'Submit residence permit (back)',
        title_permit_front: 'Submit residence permit (front)',
    },
    error_unsupported_browser: {
        subtitle_android: 'Restart the process on the latest version of Google Chrome',
        subtitle_ios: 'Restart the process on the latest version of Safari',
        title_android: 'Unsupported browser',
        title_ios: 'Unsupported browser',
    },
    generic: {
        accessibility: {
            close_sdk_screen: 'Close identity verification screen',
            dismiss_alert: 'Dismiss alert',
        },
        back: 'back',
        close: 'close',
        errors: {
            interrupted_flow_error: {
                instruction: 'Restart process on a different device',
                message: 'Camera not detected',
            },
            invalid_size: {
                instruction: 'Must be under 10MB.',
                message: 'File size exceeded.',
            },
            invalid_type: {
                instruction: 'Try using another file type.',
                message: 'File not uploaded.',
            },
            lazy_loading: {
                message: 'An error occurred while loading the component',
            },
            multiple_faces: {
                instruction: 'Only your face can be in the selfie',
                message: 'Multiple faces found',
            },
            no_face: {
                instruction: 'Your face is needed in the selfie',
                message: 'No face found',
            },
            request_error: {
                instruction: 'Please try again',
                message: 'Connection lost',
            },
            sms_failed: {
                instruction: 'Copy the link to your phone',
                message: "Something's gone wrong",
            },
            sms_overuse: {
                instruction: 'Copy the link to your phone',
                message: 'Too many failed attempts',
            },
            unsupported_file: {
                instruction: 'Try using a JPG or PNG file',
                message: 'File type not supported',
            },
        },
        lazy_load_placeholder: 'Loading...',
        loading: 'Loading',
    },
    get_link: {
        alert_wrong_number: 'Check that your number is correct',
        button_copied: 'Copied',
        button_copy: 'Copy',
        button_submit: 'Send link',
        info_qr_how: 'How to scan a QR code',
        info_qr_how_list_item_camera: 'Point your phone’s camera at the QR code',
        info_qr_how_list_item_download:
            'If it doesn’t work, download a QR code scanner from Google Play or the App Store',
        link_divider: 'or',
        link_qr: 'Scan QR code',
        link_sms: 'Get link via SMS',
        link_url: 'Copy link',
        loader_sending: 'Sending',
        number_field_input_placeholder: 'Enter mobile number',
        number_field_label: 'Enter your mobile number:',
        subtitle_qr: 'Scan the QR code with your phone',
        subtitle_sms: 'Send this one-time link to your phone',
        subtitle_url: 'Open the link on your mobile',
        title: 'Get your secure link',
        url_field_label: 'Copy the link to your mobile browser',
    },
    linked_computer: {
        button_primary: 'Continue',
        info: 'Make sure§',
        list_item_desktop_open: '2. Your desktop window stays open',
        list_item_sent_by_you: '1. This link was sent by you',
        subtitle: 'Continue with the verification',
        title: 'Linked to your computer',
    },
    mobilePhrases: {
        photo_upload: {
            body_id_back: 'Take a photo of the back of your card',
            body_id_front: 'Take a photo of the front of your card',
            body_license_back: 'Take a photo of the back of your license',
            body_license_front: 'Take a photo of the front of your license',
            body_passport: 'Take a photo of your passport photo page',
            body_selfie: 'Take a selfie showing your face',
        },
        selfie_capture: {
            alert: {
                camera_inactive: {
                    detail: 'Take a photo using the <fallback>basic camera mode</fallback> instead',
                },
                camera_not_working: {
                    detail: 'Take a photo using the <fallback>basic camera mode</fallback> instead',
                },
            },
        },
        upload_guide: {
            button_primary: 'Take a photo',
            title: 'Passport photo page',
        },
    },
    outro: {
        body: 'Thank you',
        title: 'Verification complete',
    },
    permission_recovery: {
        button_primary: 'Refresh',
        info: 'Recovery',
        list_header_cam: 'Follow these steps to recover camera access:',
        list_item_action_cam: 'Refresh this page to restart the identity verification process',
        list_item_how_to_cam: 'Grant access to your camera from your browser settings',
        subtitle_cam: 'Recover camera access to continue face verification',
        title_cam: 'Camera access is denied',
    },
    permission: {
        body_cam: 'We cannot verify you without using your camera',
        button_primary_cam: 'Enable camera',
        subtitle_cam: 'When prompted, you must enable camera access to continue',
        title_cam: 'Allow camera access',
    },
    photo_upload: {
        body_bank_statement: 'Provide the whole document page for best results',
        body_benefits_letter: 'Provide the whole document page for best results',
        body_bill: 'Provide the whole document page for best results',
        body_government_letter: 'Provide the whole document page for best results',
        body_id_back: 'Upload back of card from your computer',
        body_id_front: 'Upload front of card from your computer',
        body_license_back: 'Upload back of license from your computer',
        body_license_front: 'Upload front of license from your computer',
        body_passport: 'Upload passport photo page from your computer',
        body_selfie: 'Upload a selfie from your computer',
        body_tax_letter: 'Provide the whole document page for best results',
        button_take_photo: 'Take photo',
        button_upload: 'Upload',
        title_selfie: 'Selfie',
    },
    selfie_capture: {
        alert: {
            camera_inactive: {
                detail: 'Check that it is connected and functional. You can also <fallback>continue verification on your phone</fallback>',
                detail_no_fallback: 'Make sure your device has a working camera',
                title: 'Camera not working?',
            },
            camera_not_working: {
                detail: 'It may be disconnected. <fallback>Try using your phone instead</fallback>.',
                detail_no_fallback: "Make sure your device's camera works",
                title: 'Camera not working',
            },
            timeout: {
                detail: "Remember to press stop when you're done. <fallback>Redo video actions</fallback>",
                title: 'Looks like you took too long',
            },
        },
        button_accessibility: 'Take a photo',
        frame_accessibility: 'View from camera',
        title: 'Take a selfie',
    },
    selfie_confirmation: {
        image_accessibility: 'Photo of your face',
        subtitle: 'Make sure your selfie clearly shows your face',
        title: 'Check selfie',
    },
    selfie_intro: {
        button_primary: 'Continue',
        list_accessibility: 'Tips to take a good selfie',
        list_item_face_forward: 'Face forward and make sure your eyes are clearly visible',
        list_item_no_glasses: 'Remove your glasses, if necessary',
        subtitle: "We'll compare it with your document",
        title: 'Take a selfie',
    },
    sms_sent: {
        info: 'Tips',
        info_link_expire: 'Your link will expire in one hour',
        info_link_window: 'Keep this window open while using your mobile',
        link: 'Resend link',
        subtitle: "We've sent a secure link to %{number}",
        subtitle_minutes: 'It may take a few minutes to arrive',
        title: 'Check your mobile',
    },
    switch_phone: {
        info: 'Tips',
        info_link_expire: 'Your mobile link will expire in one hour',
        info_link_refresh: "Don't refresh this page",
        info_link_window: 'Keep this window open while using your mobile',
        link: 'Cancel',
        subtitle: "Once you've finished we'll take you to the next step",
        title: 'Connected to your mobile',
    },
    upload_guide: {
        button_primary: 'Upload photo',
        image_detail_blur_alt: 'Example of a blurry document',
        image_detail_blur_label: 'All details must be clear — nothing blurry',
        image_detail_cutoff_alt: 'Example of a cut-off document',
        image_detail_cutoff_label: 'Show all details — including the bottom 2 lines',
        image_detail_glare_alt: 'Example of a document with glare',
        image_detail_glare_label: 'Move away from direct light — no glare',
        image_detail_good_alt: 'Document example',
        image_detail_good_label: 'The photo should clearly show your document',
        subtitle: 'Scans and photocopies are not accepted',
        title: 'Upload passport photo page',
    },
};
