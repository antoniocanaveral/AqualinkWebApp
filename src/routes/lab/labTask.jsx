import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskLabTable from '../../container/AQx-Labs/task/table/task-table-lab';
import TaskLabs from '../../container/AQx-Labs/task-labs';

const NotFound = lazy(() => import('../../container/pages/404'));

function TaskRoutes() {
  return (
    <Routes>
      <Route index element={<TaskLabs />}>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default TaskRoutes;
