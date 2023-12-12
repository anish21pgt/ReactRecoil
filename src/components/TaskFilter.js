import { useRecoilState } from 'recoil';
import { taskFilterState } from '../state/Atoms';

function TaskFilter() {
  const [taskFilter, setTaskFilter] = useRecoilState(taskFilterState);

  const handleFilterChange = (e) => {
    setTaskFilter(e.target.value);
  };

  return (
    <>
      <div className='p-5'></div>
      <div className='p-5'></div>
      <div className="mb-3 text-center">
        <h2>Filter Tasks</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <select
            className="form-select"
            value={taskFilter}
            onChange={handleFilterChange}
            style={{ width: '200px' }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Not Completed</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default TaskFilter;



