import { JobPosition } from './JobPosition';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectVisiblePositions } from 'store/positions/position-selector';
import { addFilter } from 'store/filters/filters-actions';
import { selectFilters } from 'store/filters/filters-selectors'; 

const JobList = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters)
  const data = useSelector((state) => selectVisiblePositions(state, selectedFilters))
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  
  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter}{...item} />
      ))}
    </div>
  )
}

export {JobList};