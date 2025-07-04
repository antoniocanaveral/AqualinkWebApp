/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilPaperclip from '@iconscout/react-unicons/icons/uil-paperclip';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import UilSmile from '@iconscout/react-unicons/icons/uil-smile';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import UilClosedCaptioningSlash from '@iconscout/react-unicons/icons/uil-closed-captioning-slash';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import moment from 'moment';
import Picker from 'emoji-picker-react';

import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { SmileOutlined, MoreOutlined } from '@ant-design/icons';
import { SingleChatWrapper, MessageList, Footer, BackShadowEmoji } from '../style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { updateGroupChat } from '../../../redux/chat/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';

function SingleGroupChat({ match }) {
  const dispatch = useDispatch();
  const { rtl, chat } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      chat: state.chatSingle.data,
    };
  });
  const left = !rtl ? 'left' : 'right';

  const [state, setState] = useState({
    chatData: chat,
    me: 'woadud@gmail.com',
    singleContent: chat[0].content,
    name: chat[0].groupName,
    inputValue: '',
    fileList: [],
    fileList2: [],
  });
  const [pickerShow, setPickerShow] = useState(false);
  const { singleContent, name, me, inputValue } = state;

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setState({
        chatData: chat,
        singleContent: chat[0].content,
        name: chat[0].groupName,
        inputValue,
        me: 'woadud@gmail.com',
        fileList: [],
        fileList2: [],
      });
    }
    return () => {
      unmounted = true;
    };
  }, [match, chat, inputValue]);

  const handleChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pushcontent = {
      content: inputValue,
      time: new Date().getTime(),
      seen: false,
      reaction: false,
      email: me,
      userName: 'Woadud Akand',
    };
    dispatch(updateGroupChat(parseInt(match.params.id, 10), pushcontent));
    setState({
      ...state,
      singleContent: [...singleContent, pushcontent],
      inputValue: '',
    });
  };

  const onEmojiClick = (event, emojiObject) => {
    setState({ ...state, inputValue: inputValue + emojiObject.emoji });
  };

  const onPickerShow = () => {
    setPickerShow(!pickerShow);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    listType: 'picture-card',
    onChange(info) {
      if (info.file.status !== 'uploading') {

        setState({
          ...state,
          fileList: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const attachment = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {

        setState({
          ...state,
          fileList2: info.fileList,
        });
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const renderView = ({ style }) => {
    const customStyle = {
      marginRight: 'auto',
      [rtl ? 'left' : 'right']: '2px',
      [rtl ? 'marginLeft' : 'marginRight']: '-19px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  };

  const renderThumbVertical = ({ style }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
      [left]: '2px',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  };

  const renderThumbHorizontal = function () {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...thumbStyle }} />;
  };

  const content = (
    <>
      <NavLink to="#">
        <UilUsersAlt />
        <span>Create new group</span>
      </NavLink>
      <NavLink to="#">
        <UilTrashAlt />
        <span>Delete conversation</span>
      </NavLink>
      <NavLink to="#">
        <UilClosedCaptioningSlash />
        <span>Block & Report</span>
      </NavLink>
    </>
  );

  return (
    <SingleChatWrapper className="group-chat">
      {pickerShow && <BackShadowEmoji onClick={() => setPickerShow(false)} />}
      <Cards
        title={
          <div className="group-chat-header d-flex">
            <Heading as="h5">{name}</Heading>
            <div className="members">
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#">
                <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
              </Link>
              <Link to="#" className="show-more">
                <span>20+</span>
              </Link>
              <Link to="#" className="add-more">
                <span className="add-icon">
                  <UilPlus />
                </span>
              </Link>
            </div>
          </div>
        }
        more={content}
      >
        <ul className="atbd-chatbox">
          <Scrollbars
            className="custom-scrollbar"
            autoHide
            autoHideTimeout={500}
            autoHideDuration={200}
            renderThumbHorizontal={renderThumbHorizontal}
            renderThumbVertical={renderThumbVertical}
            renderView={renderView}
            renderTrackVertical={(props) => <div {...props} className="ninjadash-track-vertical" />}
          >
            {singleContent.length ? (
              singleContent.map((mes, index) => {
                const id = mes.time;
                const same = moment(id).format('MM-DD-YYYY') === moment().format('MM-DD-YYYY');
                return (
                  <li className="atbd-chatbox__single" key={id} style={{ overflow: 'hidden' }}>
                    <div className={mes.email !== me ? 'left' : 'right'}>
                      {mes.email !== me ? (
                        <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                      ) : null}

                      <div className="atbd-chatbox__content">
                        <Heading as="h5" className="atbd-chatbox__name">
                          {mes.email !== me && name}

                          <span>{same ? moment(id).format('hh:mm A') : moment(id).format('LL')}</span>
                        </Heading>
                        {mes.email !== me ? (
                          <div className="atbd-chatbox__contentInner d-flex">
                            <div className="atbd-chatbox__message">
                              <MessageList className="message-box">{mes.content}</MessageList>
                            </div>

                            <div className="atbd-chatbox__actions">
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__emoji">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#127773;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128116;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128127;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128151;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <span role="img">&#128400;</span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link onClick={(e) => e.preventDefault()} to="#">
                                          <UilEllipsisH />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottom"
                              >
                                <Link to="#">
                                  <SmileOutlined />
                                </Link>
                              </Dropdown>
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__messageControl">
                                    <ul>
                                      <li>
                                        <Link to="#">Edit</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Copy</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Quote</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Forward</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Remove</Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottom"
                              >
                                <Link onClick={(e) => e.preventDefault()} to="#">
                                  <UilEllipsisH />
                                </Link>
                              </Dropdown>
                            </div>
                          </div>
                        ) : (
                          <div className="atbd-chatbox__contentInner d-flex">
                            <div className="atbd-chatbox__actions">
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__messageControl">
                                    <ul>
                                      <li>
                                        <Link to="#">Edit</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Copy</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Quote</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Forward</Link>
                                      </li>
                                      <li>
                                        <Link to="#">Remove</Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottom"
                              >
                                <Link onClick={(e) => e.preventDefault()} to="#">
                                  <UilEllipsisH />
                                </Link>
                              </Dropdown>
                              <Dropdown
                                action={['hover']}
                                content={
                                  <div className="atbd-chatbox__emoji">
                                    <ul>
                                      <li>
                                        <Link to="#">&#127773;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128116;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128127;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128151;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">&#128400;</Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <MoreOutlined />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                placement="bottom"
                              >
                                <Link to="#">
                                  <SmileOutlined />
                                </Link>
                              </Dropdown>
                            </div>
                            <div className="atbd-chatbox__message">
                              <MessageList className="message-box">{mes.content}</MessageList>
                            </div>
                          </div>
                        )}
                        {singleContent.length === index + 1 ? (
                          <div className="group-seen">
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                            <img src={new URL('../../../static/img/avatar/chat-auth.png', import.meta.url).href} alt="" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>No data found</p>
            )}
          </Scrollbars>
        </ul>
        <Footer>
          <form onSubmit={handleSubmit}>
            <div
              className={`chatbox-reply-form d-flex ${state.fileList.length && 'hasImage'} ${
                state.fileList2.length && 'hasFile'
              }`}
            >
              <span className="smile-icon">
                {pickerShow && <Picker onEmojiClick={onEmojiClick} />}
                <Link onClick={onPickerShow} to="#">
                  <UilSmile />
                </Link>
              </span>
              <div className="chatbox-reply-input">
                <input
                  onChange={handleChange}
                  placeholder="Type your message..."
                  name="chat"
                  id="chat"
                  style={{ width: '100%' }}
                  value={inputValue}
                />
              </div>
              <div className="chatbox-reply-action d-flex">
                <Upload {...props}>
                  <Link to="#">
                    <UilCamera />
                  </Link>
                </Upload>
                <Upload {...attachment}>
                  <Link to="#">
                    <UilPaperclip />
                  </Link>
                </Upload>
                <Button onClick={handleSubmit} type="primary">
                  <UilMessage />
                </Button>
              </div>
            </div>
          </form>
        </Footer>
      </Cards>
    </SingleChatWrapper>
  );
}

SingleGroupChat.propTypes = {
  match: PropTypes.object,
};

export default SingleGroupChat;
