import React from 'react';
import classNames from 'classnames';
import { localize } from '@deriv/translations';
import { Button, Input, Icon } from '@deriv/components';
import { compressImageFiles } from '@deriv/shared';
import PropTypes from 'prop-types';

const FileUploader = ({
  class_name,
  error,
  file_name,
  handleFile,
  index,
  item_index,
  name,
  sub_index,
  updateErrors,
}) => {
  const [show_browse_button, setShowBrowseButton] = React.useState(!file_name);
  // Create a reference to the hidden file input element
  const hidden_file_input = React.useRef(null);
  const handleClick = (e) => {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    hidden_file_input.current.click();
  };

  const handleChange = async (event) => {
    event.nativeEvent.preventDefault();
    event.nativeEvent.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    const file_to_upload = await compressImageFiles([event.target.files[0]]);
    handleFile(name, file_to_upload[0]);
    setShowBrowseButton(!file_to_upload[0]);
  };
  const handleIconClick = async (e) => {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    hidden_file_input.current.value = '';
    await handleFile(name, '');
    setShowBrowseButton((prevState) => !prevState);
    await updateErrors(index, item_index, sub_index);
  };
  return (
    <div className={classNames('poo-file-uploader', class_name)}>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg, application/pdf"
        ref={hidden_file_input}
        onChange={handleChange}
        className="hidden-input"
        name={name}
      />
      <Input
        name="cardImgName"
        required
        label={localize('Choose a photo')}
        maxLength={255}
        hint={localize(
          'Accepted formats: pdf, jpeg, jpg, and png. Max file size: 8MB'
        )}
        value={file_name}
        readOnly
        color="less-prominent"
        type={'text'}
        // @ts-expect-error fix this
        tabIndex={'-1'}
        error={error}
        trailing_icon={
          <Icon
            onClick={handleIconClick}
            icon="IcCross"
            height="100%"
            size={20}
            className={classNames('stack-top ', {
              'remove-element': show_browse_button,
            })}
          />
        }
      />
      <Button
        className={classNames(
          'proof-of-ownership__card-open-inputs-photo-btn ',
          {
            'remove-element': !show_browse_button,
          }
        )}
        text={localize('Browse')}
        onClick={handleClick}
        primary
      />
    </div>
  );
};

FileUploader.propTypes = {
  class_name: PropTypes.string,
  error: PropTypes.string,
  file_name: PropTypes.string,
  handleFile: PropTypes.func,
  index: PropTypes.number,
  item_index: PropTypes.number,
  name: PropTypes.string,
  sub_index: PropTypes.number,
  updateErrors: PropTypes.func,
};

export default FileUploader;
