import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Select, DatePicker, Radio, Upload, Spin } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
import moment from 'moment';
import PropTypes from 'prop-types';
import { RecordFormWrapper } from './Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { Main, BasicFormWrapper } from '../../styled';
import { axiosDataUpdate, axiosFileUploder, axiosDataSingle } from '../../../redux/crud/axios/actionCreator';
import Heading from '../../../components/heading/heading';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
function Edit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { crud, isLoading, url, isFileLoading } = useSelector((state) => {
    return {
      crud: state.SingleAxiosCrud.data,
      isLoading: state.AxiosCrud.loading,
      url: state.AxiosCrud.url,
      isFileLoading: state.AxiosCrud.fileLoading,
    };
  });
  const [state, setState] = useState({
    join: null,
  });
  const [customUrl, setCustomUrl] = useState(url);

  const [form] = Form.useForm();

  useEffect(() => {
    if (crud) {
      form.setFieldsValue(crud);
      setState({ join: crud.join });
      setCustomUrl(crud.image);
    }
  }, [form, crud]);

  useEffect(() => {
    if (url) {
      setCustomUrl(url);
    }
  }, [url]);

  useEffect(() => {
    if (axiosDataSingle) {
      dispatch(axiosDataSingle(parseInt(id, 10)));
    }
  }, [dispatch, id]);

  const handleSubmit = (values) => {
    dispatch(
      axiosDataUpdate(id, {
        ...values,
        image: url,
        join: state.join,
      }),
    );
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
        dispatch(axiosFileUploder(info.file.originFileObj));
      }
      if (info.file.status === 'done') {

      } else if (info.file.status === 'error') {

      }
    },
  };

  return (
    <>
      <PageHeader
        
        buttons={[
          <Button className="btn-add_new" size="default" key="1" type="primary">
            <Link key="1" to="/admin/axios/crud/axios-view">
              View All
            </Link>
          </Button>,
        ]}
        ghost
        title="Update Your Recored"
      />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <RecordFormWrapper>
              <Cards headless>
                {crud === null ? (
                  <div className="record-spin">
                    <Spin />
                  </div>
                ) : (
                  <Row justify="center">
                    <Col xl={10} md={16} xs={24}>
                      <figure className="pro-image align-center-v mt-25">
                        {crud !== null && (
                          <img
                            src={
                              customUrl === null
                                ? new URL('../../../static/img/avatar/profileImage.png', import.meta.url).href
                                : `${import.meta.env.VITE_API_ENDPOINT}/${customUrl}`
                            }
                            alt={crud.id}
                          />
                        )}

                        <figcaption>
                          <Upload {...props}>
                            <Link className="upload-btn" to="#">
                              <UilCamera />
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
                      <BasicFormWrapper>
                        {crud.name !== undefined ? (
                          <Form
                            className="add-record-form"
                            style={{ width: '100%' }}
                            layout="vertical"
                            form={form}
                            name="edit"
                            onFinish={handleSubmit}
                            initialValues={crud}
                          >
                            <Form.Item name="name" label="Name">
                              <Input />
                            </Form.Item>
                            <Form.Item name="email" rules={[{ type: 'email' }]} label="Email">
                              <Input />
                            </Form.Item>
                            <Form.Item name="country" label="Country">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="bangladesh">Bangladesh</Option>
                                <Option value="india">India</Option>
                                <Option value="pakistan">Pakistan</Option>
                                <Option value="srilanka">Srilanka</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="city" label="City">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="dhaka">Dhaka</Option>
                                <Option value="mymensingh">Mymensingh</Option>
                                <Option value="khulna">Khulna</Option>
                                <Option value="barisal">Barisal</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="company" label="Company">
                              <Input />
                            </Form.Item>
                            <Form.Item name="position" label="Position">
                              <Input />
                            </Form.Item>
                            <Form.Item label="Joining Date">
                              <DatePicker
                                defaultValue={moment(`${state.join === null ? crud.join : state.join}`, dateFormat)}
                                onChange={onChange}
                                style={{ width: '100%' }}
                                format={dateFormat}
                              />
                            </Form.Item>
                            <Form.Item name="status" label="Status">
                              <Radio.Group>
                                <Radio value="active">Active</Radio>
                                <Radio value="deactivated">Deactivated</Radio>
                                <Radio value="blocked">Blocked</Radio>
                              </Radio.Group>
                            </Form.Item>
                            <div className="record-form-actions text-right">
                              <Button htmlType="submit" type="primary">
                                {isLoading ? 'Loading...' : 'Update'}
                              </Button>
                            </div>
                          </Form>
                        ) : null}
                      </BasicFormWrapper>
                    </Col>
                  </Row>
                )}
              </Cards>
            </RecordFormWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
}

Edit.propTypes = {
  match: PropTypes.object,
};

export default Edit;
