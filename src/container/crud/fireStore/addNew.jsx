import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload, Spin } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { RecordFormWrapper } from './style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Main, BasicFormWrapper } from '../../styled';
import { fbDataSubmit, fbFileUploder, fbFileClear } from '../../../redux/firebase/firestore/actionCreator';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

function AddNew() {
  const dispatch = useDispatch();
  const { isLoading, image, isFileLoading } = useSelector((state) => {
    return {
      isLoading: state.crud.loading,
      image: state.crud.image,
      isFileLoading: state.crud.fileLoading,
    };
  });
  const { pathname } = useLocation();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    join: '',
  });

  useEffect(() => {
    dispatch(fbFileUploder());
  }, [pathname, dispatch]);

  const handleSubmit = (values) => {
    dispatch(
      fbDataSubmit({
        ...values,
        image,
        join: state.join,
        id: new Date().getTime(),
      }),
    );
    form.resetFields();
    dispatch(fbFileClear());
  };

  const onChange = (date, dateString) => {
    setState({ join: dateString });
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: false,
    showUploadList: false,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        dispatch(fbFileUploder(info.file.originFileObj));
      }
      if (info.file.status === 'done') {

      } else if (info.file.status === 'error') {

      }
    },
  };

  return (
    <>
      <PageHeader
        
        routes={[]}
        buttons={[
          <Button className="btn-add_new" size="default" key="1" type="primary">
            <Link to="/admin/firestore/fbView">View All</Link>
          </Button>,
        ]}
        ghost
        title="Add New"
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <RecordFormWrapper>
              <Cards headless>
                <Row justify="center">
                  <Col xl={10} md={16} xs={24}>
                    <BasicFormWrapper>
                      <Form
                        className="add-record-form"
                        style={{ width: '100%' }}
                        layout="vertical"
                        form={form}
                        name="addnew"
                        onFinish={handleSubmit}
                      >
                        <figure className="pro-image align-center-v">
                          <img src={!image ? new URL('../../../static/img/avatar/profileImage.png', import.meta.url).href : image} alt="" />
                          <figcaption>
                            <Upload {...props}>
                              <Link className="upload-btn" to="#">
                                <FeatherIcon icon="camera" size={16} />
                              </Link>
                            </Upload>
                            <div className="info">
                              <Heading as="h4">Profile Photo</Heading>
                            </div>
                            {isFileLoading && (
                              <div className="isUploadSpain">
                                <Spin />
                              </div>
                            )}
                          </figcaption>
                        </figure>
                        <Form.Item name="name" label="Name">
                          <Input placeholder="Input Name" />
                        </Form.Item>
                        <Form.Item name="email" rules={[{ type: 'email' }]} label="Email">
                          <Input placeholder="example@gmail.com" />
                        </Form.Item>
                        <Form.Item name="country" initialValue="" label="Country">
                          <Select style={{ width: '100%' }}>
                            <Option value="">Please Select</Option>
                            <Option value="bangladesh">Bangladesh</Option>
                            <Option value="india">India</Option>
                            <Option value="pakistan">Pakistan</Option>
                            <Option value="srilanka">Srilanka</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="city" initialValue="" label="City">
                          <Select style={{ width: '100%' }}>
                            <Option value="">Please Select</Option>
                            <Option value="dhaka">Dhaka</Option>
                            <Option value="mymensingh">Mymensingh</Option>
                            <Option value="khulna">Khulna</Option>
                            <Option value="barisal">Barisal</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item name="company" label="Company">
                          <Input placeholder="Company Name" />
                        </Form.Item>
                        <Form.Item name="position" label="Position">
                          <Input placeholder="Position" />
                        </Form.Item>
                        <Form.Item label="Joining Date">
                          <DatePicker onChange={onChange} style={{ width: '100%' }} format={dateFormat} />
                        </Form.Item>
                        <Form.Item name="status" label="Status">
                          <Radio.Group>
                            <Radio value="active">Active</Radio>
                            <Radio value="deactivated">Deactivated</Radio>
                            <Radio value="blocked">Blocked</Radio>
                          </Radio.Group>
                        </Form.Item>
                        <div className="record-form-actions text-right">
                          <Button size="default" htmlType="Save" type="primary">
                            {isLoading ? 'Loading...' : 'Submit'}
                          </Button>
                        </div>
                      </Form>
                    </BasicFormWrapper>
                  </Col>
                </Row>
              </Cards>
            </RecordFormWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddNew;
