import React from 'react';
import { Progress, Tag } from 'antd';
import UilEllipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { textRefactor } from '../../../components/utilities/utilities';
import { ProjectCard } from '../style';

function GridCard({ value }) {
  const { id, title, status, content, percentage } = value;
  return (
    <ProjectCard>
      <Cards headless>
        <div className="project-top">
          <div className="project-title">
            <h1>
              <Link to={`/admin/project/projectDetails/${id}`}>{title}</Link>
              <Tag className={status}>{status}</Tag>
            </h1>
            <Dropdown
              content={
                <>
                  <Link to="#">Total Income</Link>
                  <Link to="#">Total Expense</Link>
                  <Link to="#">Total Tax</Link>
                  <Link to="#">Net Profit</Link>
                </>
              }
            >
              <Link to="#">
                <UilEllipsisH />
              </Link>
            </Dropdown>
          </div>
          <p className="project-desc">{textRefactor(content, 13)}</p>
          <div className="project-timing">
            <div>
              <span>Start Date</span>
              <strong>26 Dec 2019</strong>
            </div>
            <div>
              <span>Deadline</span>
              <strong>18 Mar 2020</strong>
            </div>
          </div>
          <div className="project-progress">
            <Progress
              percent={status === 'complete' ? 100 : percentage}
              strokeWidth={5}
              status="primary"
              className="progress-primary"
            />
            <p>12/15 Task Completed</p>
          </div>
        </div>
        <div className="project-bottom">
          <div className="project-assignees">
            <p>Assigned To</p>
            <ul>
              <li>
                <img src={new URL(`../../../static/img/users/1.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/2.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/3.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/4.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/5.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/6.png`, import.meta.url).href} alt="" />
              </li>
              <li>
                <img src={new URL(`../../../static/img/users/7.png`, import.meta.url).href} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </Cards>
    </ProjectCard>
  );
}

GridCard.propTypes = {
  value: PropTypes.object,
};

export default GridCard;
