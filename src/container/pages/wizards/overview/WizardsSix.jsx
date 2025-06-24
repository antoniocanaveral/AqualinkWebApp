import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Select, Radio, Table } from 'antd';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { useDispatch, useSelector } from 'react-redux';
import { FigureWizards, WizardWrapper, OrderSummary, WizardSix } from '../Style';
import { ProductTable } from '../../../ecommerce/Style';
import { Steps } from '../../../../components/steps/steps';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../../styled';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../../../redux/cart/actionCreator';

const { Option } = Select;
function WizardsSix() {
  const dispatch = useDispatch();
  const { cartData, rtl } = useSelector((state) => {
    return {
      cartData: state.cart.data,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 1,
  });

  const { status, isFinished, current } = state;

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const incrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) + 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const decrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const cartDeleted = (id) => {
    const confirm = window.confirm('Are you sure to delete this product?');
    if (confirm) dispatch(cartDelete(id, cartData));
  };

  const next = () => {
    setState({
      ...state,
      status: 'process',
      current: current + 1,
    });
  };

  const prev = () => {
    setState({
      ...state,
      status: 'process',
      current: current - 1,
    });
  };

  const done = () => {
    const confirm = window.confirm('Are sure to submit order?');
    if (confirm) {
      setState({
        ...state,
        status: 'finish',
        isFinished: true,
        current: 0,
        visible: true,
      });
    }
  };

  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const dataSource = [];

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map((data) => {
      const { id, img, name, quantity, price, size, color } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return dataSource.push({
        key: id,
        product: (
          <div className="cart-single">
            <FigureWizards>
              <img style={{ width: 80 }} src={require(`../../../../${img}`)} alt="" />
              <figcaption>
                <div className="cart-single__info">
                  <Heading as="h6">{name}</Heading>
                  <ul className="info-list">
                    <li>
                      <span className="info-title">Size :</span>
                      <span>{size}</span>
                    </li>
                    <li>
                      <span className="info-title"> Color :</span>
                      <span>{color}</span>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </FigureWizards>
          </div>
        ),
        price: <span className="cart-single-price">${price}</span>,
        quantity: (
          <div className="cart-single-quantity">
            <Button onClick={() => decrementUpdate(id, quantity)} className="btn-dec" type="default">
              <UilMinus />
            </Button>
            {quantity}
            <Button onClick={() => incrementUpdate(id, quantity)} className="btn-inc" type="default">
              <UilPlus />
            </Button>
          </div>
        ),
        total: <span className="cart-single-t-price">${quantity * price}</span>,
        action: (
          <div className="table-action">
            <Button
              onClick={() => cartDeleted(id)}
              className="btn-icon"
              to="#"
              size="default"
              type="danger"
              shape="circle"
              transparented
            >
              <UilTrashAlt />
            </Button>
          </div>
        ),
      });
    });
  }

  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  return (
    <div className="wizard-side-border">
      <WizardWrapper className="ninjadash-wizard-page">
        <WizardSix>
          <Steps
            isswitch
            isvertical
            current={0}
            status={status}
            steps={[
              {
                title: (
                  <div className="wizard-item">
                    <h2>Create Account</h2>
                    <p>Lorem Ipsum is simply dummy text of the dummy typesetting industry.</p>
                    <img src={new URL(`../../../../static/img/wizards/${status !== 'finish' ? 1 : 1}.svg`, import.meta.url).href} alt="" />
                  </div>
                ),
                content: (
                  <BasicFormWrapper className="basic-form-inner">
                    <div className="atbd-form-checkout">
                      <Row justify="center">
                        <Col xs={24}>
                          <div className="create-account-form">
                            <Heading as="h4">1. Please Create Your Account</Heading>
                            <Form form={form} name="account">
                              <Form.Item name="username" label="Username">
                                <Input placeholder="Username" />
                              </Form.Item>
                              <Form.Item name="email" rules={[{ type: 'email' }]} label="Email Address">
                                <Input placeholder="name@gmail.com" />
                              </Form.Item>
                              <Form.Item
                                name="password"
                                rules={[
                                  {
                                    min: 6,
                                    message: 'Enter a valid password. Min 6 characters long.',
                                  },
                                ]}
                                label="Password"
                              >
                                <Input.Password placeholder="Password" />
                              </Form.Item>
                              <span className="input-message">Enter a valid password. Min 6 characters long</span>
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </BasicFormWrapper>
                ),
              },
             
            ]}
            onNext={next}
            onPrev={prev}
            onDone={done}
            isfinished={isFinished}
          />
        </WizardSix>
      </WizardWrapper>
    </div>
  );
}

export default WizardsSix;
