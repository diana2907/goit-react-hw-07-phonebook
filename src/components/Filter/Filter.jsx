import css from 'components/Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.box}>
      <p className={css.text}>Find contact by name</p>
      <input className={css.input} type="text" onChange={handleFilterChange} />
    </div>
  );
};
