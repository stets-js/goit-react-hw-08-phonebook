//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../contactSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filteredName = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filteredName}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     filterChange: PropTypes.func.isRequired,
// }

export default Filter;
