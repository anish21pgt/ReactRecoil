import { selector } from 'recoil';
import { taskListState, taskFilterState } from './Atoms';

export const filteredTaskListState = selector({
  key: 'filteredTaskListState',
  get: ({ get }) => {
    const filter = get(taskFilterState);
    const tasks = get(taskListState);

    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'uncompleted':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  },
});

