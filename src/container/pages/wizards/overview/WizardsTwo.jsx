import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Form, Input, Select, Radio, Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilMap from '@iconscout/react-unicons/icons/uil-map-marker';
import UilCredit from '@iconscout/react-unicons/icons/uil-credit-card';
import UilThumbsUp from '@iconscout/react-unicons/icons/uil-thumbs-up';
import { FigureWizards, WizardWrapper, OrderSummary, WizardTwo } from '../Style';
import { ProductTable } from '../../../ecommerce/Style';
import { Steps } from '../../../../components/steps/steps';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../../styled';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../../../redux/cart/actionCreator';

const { Option } = Select;
function WizardsTwo() {
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

  useLayoutEffect(() => {
    const activeElement = document.querySelectorAll('.ant-steps-item-active');
    const successElement = document.querySelectorAll('.ant-steps-item-finish');

    activeElement.forEach((element) => {
      if (element.previousSibling) {
        const bgImage = element.previousSibling;
        if (bgImage.classList.contains('success-step-item')) {
          bgImage.classList.remove('success-step-item');
        } else {
          bgImage.classList.remove('wizard-step-item');
        }
        bgImage.classList.add('wizard-steps-item-active');
      }
    });

    successElement.forEach((element) => {
      if (element.previousSibling) {
        const bgImage = element.previousSibling;
        bgImage.classList.remove('wizard-steps-item-active');
        bgImage.classList.add('success-step-item');

      }
    });
  });

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
    <WizardWrapper className="ninjadash-wizard-page">
      <WizardTwo>
        <Steps
          isswitch
          current={0}
          status={status}
          steps={[
            {
              title: 'Create Account',
              className: 'wizard-step-item',
              icon: <UilUser />,
              content: (
                <BasicFormWrapper className="basic-form-inner">
                  <div className="atbd-form-checkout">
                    <Row justify="center">
                      <Col sm={22} xs={24}>
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
                              className="mb-0"
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
            {
              title: 'Shipping Address',
              className: 'wizard-step-item',
              icon: <UilMap />,
              content: (
                <BasicFormWrapper className="basic-form-inner">
                  <div className="atbd-form-checkout">
                    <Row justify="center">
                      <Col sm={22} xs={24}>
                        <div className="shipping-form">
                          <Heading as="h4">2. Please Fill in Your Shipping Address</Heading>
                          <Form form={form} name="address">
                            <Form.Item name="name" label="Contact Name">
                              <Input placeholder="Ibn adam" />
                            </Form.Item>
                            <Form.Item
                              name="company"
                              label={
                                <span>
                                  Company Name <span>(Optional)</span>
                                </span>
                              }
                            >
                              <Input placeholder="adam" />
                            </Form.Item>
                            <Form.Item name="phone" label="Phone Number">
                              <Input placeholder="+880" />
                            </Form.Item>
                            <Form.Item name="country" initialValue="" label="Country/Region">
                              <Select style={{ width: '100%' }}>
                                <Option value="">Please Select</Option>
                                <Option value="bangladesh">Bangladesh</Option>
                                <Option value="india">India</Option>
                              </Select>
                            </Form.Item>
                            <Form.Item name="street" label="Street Address">
                              <Input placeholder="House Number and Street Name" />
                            </Form.Item>
                            <Form.Item name="street2" label="">
                              <Input placeholder="Apartment, Suite, Unit etc." />
                            </Form.Item>
                            <Form.Item name="city" label="City">
                              <Input placeholder="Enter City" />
                            </Form.Item>
                            <Form.Item name="zip" label="Zip/Postal Code">
                              <Input placeholder="Enter Zip" />
                            </Form.Item>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </BasicFormWrapper>
              ),
            },
            {
              title: 'Payment Method',
              className: 'wizard-step-item',
              icon: <UilCredit />,
              content: (
                <BasicFormWrapper className="basic-form-inner">
                  <div className="atbd-form-checkout">
                    <Row justify="center">
                      <Col sm={22} xs={24}>
                        <div className="payment-method-form">
                          <Heading as="h4">3. Please Select Your Payment Method</Heading>
                          <div className="shipping-selection">
                            <Radio.Group style={{ width: '100%' }}>
                              <div className="shipping-selection__card">
                                <Radio style={{ width: '100%' }} value="card">
                                  <Cards
                                    headless
                                    bodyStyle={{
                                      borderRadius: '20px',
                                    }}
                                  >
                                    <div className="supported-card d-flex">
                                      <span>Credit/Debit Card</span>
                                      <div className="supported-card_logos">
                                        <img
                                          style={{ width: '50px' }}
                                          src={new URL('../../../../static/img/cards-logo/ms.png', import.meta.url).href}
                                          alt=""
                                        />
                                        <img
                                          style={{ width: '50px' }}
                                          src={new URL('../../../../static/img/cards-logo/american-express.png', import.meta.url).href}
                                          alt=""
                                        />
                                        <img
                                          style={{ width: '50px' }}
                                          src={new URL('../../../../static/img/cards-logo/visa.png', import.meta.url).href}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <Cards headless style={{ marginBottom: 0 }}>
                                      <Form form={form} name="info">
                                        <Form.Item name="number" label="Card Number">
                                          <Input placeholder="6547-8702-6987-2527" />
                                        </Form.Item>
                                        <Form.Item name="name" label="Name on Card">
                                          <Input placeholder="Full name" />
                                        </Form.Item>
                                        <Form.Item name="month" initialValue="" label="Expiration Date">
                                          <Select style={{ width: '100%' }}>
                                            <Option value="">MM</Option>
                                            {month.map((value) => (
                                              <Option key={value} value={value}>
                                                {value}
                                              </Option>
                                            ))}
                                          </Select>
                                        </Form.Item>
                                        <Form.Item name="year" initialValue="">
                                          <Select style={{ width: '100%' }}>
                                            <Option value="">YY</Option>
                                            <Option value={new Date().getFullYear()}>{new Date().getFullYear()}</Option>
                                            {month.map((value) => (
                                              <Option
                                                key={value}
                                                value={parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                              >
                                                {parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                              </Option>
                                            ))}
                                          </Select>
                                        </Form.Item>
                                        <Form.Item name="cvv" label="CVV">
                                          <div className="cvv-wrap">
                                            <Input style={{ width: '60%' }} placeholder="XXX" />
                                            <Link className="input-leftText" to="#">
                                              What is this?
                                            </Link>
                                          </div>
                                        </Form.Item>
                                      </Form>
                                    </Cards>
                                  </Cards>
                                </Radio>
                              </div>
                              <div className="shipping-selection__paypal">
                                <Radio value="payPal" style={{ width: '100%' }}>
                                  Pay With PayPal
                                  <img src={new URL('../../../../static/img/PayPalLogo.png', import.meta.url).href} alt="paypal" />
                                </Radio>
                              </div>
                              <div className="shipping-selection__cash">
                                <Radio value="cash" style={{ width: '100%' }}>
                                  Cash on delivery
                                </Radio>
                              </div>
                            </Radio.Group>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </BasicFormWrapper>
              ),
            },
            {
              title: 'Review Order',
              className: 'wizard-step-item',
              icon: <UilThumbsUp />,
              content:
                status !== 'finish' ? (
                  <BasicFormWrapper style={{ width: '100%' }}>
                    <div className="atbd-review-order" style={{ width: '100%' }}>
                      <Heading as="h4">4. Review and confirm Order</Heading>
                      <Cards bodyStyle={{ borderRadius: 10 }} headless>
                        <div className="atbd-review-order__single">
                          <Cards headless>
                            <div className="atbd-review-order__shippingTitle">
                              <Heading as="h5">
                                Shipping Information
                                <Link to="#">
                                  <UilEdit />
                                  Edit
                                </Link>
                              </Heading>
                            </div>
                            <article className="atbd-review-order__shippingInfo">
                              <Radio.Group style={{ width: '100%' }}>
                                <Radio value="ms" style={{ width: '100%' }}>
                                  <div className="shipping-info-text">
                                    <Heading as="h6">Ibn Adam</Heading>
                                    <Heading as="h6">Phone: +61412345678</Heading>
                                    <p>
                                      795 Folsom Ave, Suite 600 <br />
                                      San Francisco, CA 94107 <br />
                                      United States
                                    </p>
                                  </div>
                                </Radio>
                              </Radio.Group>
                              <Link className="btn-addNew" to="#">
                                + Add New Address
                              </Link>
                            </article>
                          </Cards>
                        </div>
                        <div className="atbd-review-order__single">
                          <Cards headless>
                            <div>
                              <Heading as="h5">Payment Method</Heading>
                            </div>
                            <Radio.Group style={{ width: '100%' }}>
                              <Radio value="ms" style={{ width: '100%' }}>
                                <div className="method-info">
                                  <img src={new URL('../../../../static/img/ms.svg', import.meta.url).href} alt="" />
                                  **** **** **** 2597
                                </div>
                              </Radio>
                            </Radio.Group>
                            <Link className="btn-addCard" to="#">
                              + Add New Card
                            </Link>
                          </Cards>
                        </div>

                        <div className="atbd-review-order__single">
                          <Cards headless>
                            <>
                              <ProductTable>
                                <div className="table-cart table-responsive">
                                  <Table pagination={false} dataSource={dataSource} columns={columns} />
                                </div>
                              </ProductTable>

                              <Row justify="end">
                                <Col xxl={8} xl={5} md={9} sm={14} xs={24} offset={!rtl ? 10 : 0}>
                                  <OrderSummary>
                                    <div className="invoice-summary-inner">
                                      <ul className="summary-list">
                                        <li>
                                          <span className="summary-list-title">Subtotal :</span>
                                          <span className="summary-list-text">{`$${subtotal}`}</span>
                                        </li>
                                        <li>
                                          <span className="summary-list-title">Discount :</span>
                                          <span className="summary-list-text">{`$${-20}`}</span>
                                        </li>
                                        <li>
                                          <span className="summary-list-title">Shipping Charge :</span>
                                          <span className="summary-list-text">{`$${30}`}</span>
                                        </li>
                                      </ul>
                                      <Heading className="summary-total" as="h4">
                                        <span className="summary-total-label">Total : </span>
                                        <span className="summary-total-amount">{`$${subtotal + 30 - 20}`}</span>
                                      </Heading>
                                    </div>
                                  </OrderSummary>
                                </Col>
                              </Row>
                            </>
                          </Cards>
                        </div>
                      </Cards>
                    </div>
                  </BasicFormWrapper>
                ) : (
                  <Row justify="center" style={{ width: '100%' }}>
                    <Col xl={21} xs={24}>
                      <div className="checkout-successful">
                        <Cards
                          headless
                          bodyStyle={{
                            borderRadius: '20px',
                          }}
                        >
                          <Cards headless>
                            <span className="icon-success">
                              <UilCheck />
                            </span>
                            <Heading as="h3">Payment Successful</Heading>
                            <p>Thank you! We have received your Payment</p>
                          </Cards>
                        </Cards>
                      </div>
                    </Col>
                  </Row>
                ),
            },
          ]}
          onNext={next}
          onPrev={prev}
          onDone={done}
          isfinished={isFinished}
        />
      </WizardTwo>
    </WizardWrapper>
  );
}

export default WizardsTwo;
