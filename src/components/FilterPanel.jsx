import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/filters-selectors';
import { removeFilter, clearFilter } from 'store/filters/filters-actions';

const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter))
  }
  const clearAllFilters = () => {
    dispatch(clearFilter)
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
          <Badge 
            key={filter}
            variant="clearable"
            onClear={() => handleRemoveFilter(filter)}>
            {filter}
          </Badge>
          ))}
        </Stack>
        <button className='link' onClick={clearAllFilters}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};