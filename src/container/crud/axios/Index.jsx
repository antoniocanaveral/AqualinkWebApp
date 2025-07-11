import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import { RecordViewWrapper } from './Style';
import { Main, TableWrapper } from '../../styled';
import { Button } from '../../../components/buttons/buttons';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { axiosDataRead, axiosDataSearch, axiosDataDelete } from '../../../redux/crud/axios/actionCreator';

function ViewPage() {
  const dispatch = useDispatch();
  const { crud, isLoading } = useSelector((state) => {
    return {
      crud: state.AxiosCrud.data,
      isLoading: state.AxiosCrud.loading,
    };
  });

  useEffect(() => {
    if (dispatch) {
      dispatch(axiosDataRead());
    }
  }, [dispatch]);

  const [state, setState] = useState({
    selectedRowKeys: [],
  });
  const { selectedRowKeys } = state;

  const dataSource = [];

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure delete this?');
    if (confirm) {
      dispatch(
        axiosDataDelete({
          id,
          getData: () => {
            dispatch(axiosDataRead());
          },
        }),
      );
    }
    return false;
  };

  const onHandleSearch = (e) => {
    dispatch(axiosDataSearch(e.target.value, crud));
  };

  if (crud.length)
    crud.map((person, key) => {
      const { id, name, email, company, position, join, status, city, country, image } = person;

      return dataSource.push({
        key: key + 1,
        name: (
          <div className="record-img align-center-v">
            <img
              src={
                image
                  ? `${import.meta.env.VITE_API_ENDPOINT}/${image}`
                  : new URL('../../../static/img/avatar/profileImage.png', import.meta.url).href
              }
              alt={id}
            />
            <span>
              <span>{name}</span>
              <span className="record-location">{city && country ? `${city},${country}` : ''}</span>
            </span>
          </div>
        ),
        email,
        company,
        position,
        jdate: join,
        status: <span className={`status ${status}`}>{status}</span>,
        action: (
          <div className="table-actions">
            <Link className="edit" to={`/admin/axios/crud/edit/${id}`}>
              <UilEdit />
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="delete" onClick={() => handleDelete(id)} to="#">
              <UilTrash />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Joining Date',
      dataIndex: 'jdate',
      key: 'jdate',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];
  const onSelectChange = (selectedRowKey) => {
    setState({ ...state, selectedRowKeys: selectedRowKey });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <RecordViewWrapper>
      <PageHeader
        
        subTitle={
          <div>
            <Button className="btn-add_new" size="default" key="1" type="primary">
              <Link to="/admin/axios/crud/add">
                <UilPlus /> <span>Add New</span>
              </Link>
            </Button>
          </div>
        }
        buttons={[
          <div key={1} className="search-box">
            <span className="search-icon">
              <UilSearch />
            </span>
            <input onChange={onHandleSearch} type="text" name="recored-search" placeholder="Search Here" />
          </div>,
        ]}
        ghost
        title="Data List"
      />
      <Main>
        <Row gutter={15}>
          <Col className="w-100" md={24}>
            <Cards headless>
              {isLoading ? (
                <div className="spin">
                  <Spin />
                </div>
              ) : (
                <div>
                  <TableWrapper className="table-data-view table-responsive">
                    <Table
                      rowSelection={rowSelection}
                      pagination={{ pageSize: 10, showSizeChanger: true }}
                      dataSource={dataSource}
                      columns={columns}
                    />
                  </TableWrapper>
                </div>
              )}
            </Cards>
          </Col>
        </Row>
      </Main>
    </RecordViewWrapper>
  );
}

export default ViewPage;
