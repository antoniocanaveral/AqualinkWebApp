/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table, Radio, Divider } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import UserListTable from '../pages/overview/UserTable';
import ProjectLists from '../project/overview/List';
import TaskList from '../project/overview/TaskList';
import { Main, BorderLessHeading } from '../styled';
import { TaskLists } from '../project/style';

import { tableReadData } from '../../redux/data-filter/actionCreator';

function DataTables() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    selectionType: 'checkbox',
    selectedRowKeys: null,
    selectedRows: null,
    values: {},
  });

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Table',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setState({ ...state, selectedRowKeys, selectedRows });
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const columnsSort = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],


      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  const dataSort = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Blue',
      age: 50,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Silver',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '7',
      name: 'Jim White',
      age: 25,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Orange',
      age: 25,
      address: 'London No. 2 Lake Park',
    },
  ];

  useEffect(() => {
    if (dispatch) {
      dispatch(tableReadData());
    }
  }, [dispatch]);

  const { TableData } = useSelector((states) => {
    return {
      TableData: states.dataTable.tableData,
    };
  });

  const tableDataScource = [];

  if (TableData.length > 0) {
    TableData.map((item) => {
      const { id, name, country, company, position, status, date } = item;
      return tableDataScource.push({
        id: `#${id}`,
        user: <span className="ninjadash-username">{name}</span>,
        country: <span>{country}</span>,
        company: <span>{company}</span>,
        position,
        date,
        status: <span className={`ninjadash-status ninjadash-status-${status}`}>{status}</span>,
        action: (
          <div className="table-actions">
            <Link className="view" to="#">
              <UilEye />
            </Link>
            <Link className="edit" to="#">
              <UilEdit />
            </Link>
            <Link className="delete" to="#">
              <UilTrash />
            </Link>
          </div>
        ),
      });
    });
  }

  const dataTableColumn = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'coutry',
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
      title: 'Join Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    setState({ ...state, values: { pagination, filters, sorter, extra } });
  }

  return (
    <>
      <PageHeader  title="Table" routes={PageRoutes} />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <BorderLessHeading>
              <Cards title="Data Table">
                <DataTable
                  filterOption
                  filterOnchange
                  tableData={tableDataScource}
                  columns={dataTableColumn}
                  rowSelection={false}
                />
              </Cards>
            </BorderLessHeading>
          </Col>
          <Col xs={24}>
            <BorderLessHeading>
              <Cards title="Data Table 2">
                <DataTable
                  filterOption
                  filterOnchange
                  tableData={tableDataScource}
                  columns={dataTableColumn}
                  rowSelection
                />
              </Cards>
            </BorderLessHeading>
          </Col>
          <Col xs={24}>
            <Cards title="Project List">
              <ProjectLists />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="User List">
              <UserListTable />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Selection">
              <div>
                <Radio.Group
                  onChange={({ target: { value } }) => {
                    setState({ selectionType: value });
                  }}
                  value={state.selectionType}
                >
                  <Radio value="checkbox">Checkbox</Radio>
                  <Radio value="radio">radio</Radio>
                </Radio.Group>

                <Divider />
                <Table
                  className="table-responsive"
                  rowSelection={{
                    type: state.selectionType,
                    ...rowSelection,
                  }}
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                />
              </div>
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Filter and sorter">
              <Table
                className="table-responsive"
                pagination={false}
                columns={columnsSort}
                dataSource={dataSort}
                onChange={onChange}
              />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Pagination">
              <Table
                className="table-responsive"
                pagination={{
                  defaultPageSize: 3,
                  total: dataSort.length,
                  showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
                columns={columnsSort}
                dataSource={dataSort}
                onChange={onChange}
              />
            </Cards>
          </Col>
          <Col xs={24}>
            <Cards title="Task List">
              <TaskLists>
                <TaskList />
              </TaskLists>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DataTables;
