import React, { useState } from 'react';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilExpandAlt from '@iconscout/react-unicons/icons/uil-expand-alt';
import RichTextEditor from 'react-rte';
import { Input } from 'antd';
import propTypes from 'prop-types';
import { MailBox } from './style';
import MailComposer from './MailComposer';

function Compose({ close }) {
  const [state, setState] = useState({
    value: RichTextEditor.createEmptyValue(),
    tags: [],
    size: 'small',
  });

  const onChange = (value) => {
    setState({ ...state, value });
  };

  const toggleSize = () => {
    return setState({
      ...state,
      size: state.size === 'small' ? 'big' : 'small',
    });
  };

  const onMailSend = async () => {

  };

  return (
    <MailBox size={state.size}>
      <div className="header">
        <p>New Message</p>
        <div className="icon-right">
          <UilExpandAlt onClick={toggleSize} />
          <UilTimes onClick={close} />
        </div>
      </div>

      <div className="body">
        <div className="group">
          <Input placeholder="Subject" type="text" />
        </div>
        <MailComposer onSend={onMailSend} onChange={onChange} />
      </div>
    </MailBox>
  );
}

Compose.propTypes = {
  close: propTypes.func,
};

Compose.defaultProps = {
  close: () => {},
};

export default Compose;
