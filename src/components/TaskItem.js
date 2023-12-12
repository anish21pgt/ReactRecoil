import React from 'react';
import { useRecoilState } from 'recoil';
import { taskListState } from '../state/Atoms';

function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(taskListState);

  const toggleTaskCompletion = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px', display: 'flex', flexDirection: 'column', backgroundColor: task.completed ? 'red' : 'green' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>{task.text}</span>
        <input type="checkbox" checked={task.completed} onChange={toggleTaskCompletion} />
      </div>
    </div>
  );
}

export default TaskItem;




