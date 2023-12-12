import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTaskListState } from '../state/Selectors';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

function TaskList() {
  const filteredTaskList = useRecoilValue(filteredTaskListState);

  return (
    <div style={{ alignItems: 'center', maxWidth: '800px', margin: 'auto' }}>
      <TaskForm />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTaskList.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;


