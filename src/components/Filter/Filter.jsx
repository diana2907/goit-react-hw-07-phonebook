import css from 'components/Filter/Filter.module.css';

export const Filter = ({ onChange, filter }) => {
  const handleChange = evt => {
    onChange(evt.target.value);
  };
  return (
    <div className={css.box}>
      <p className={css.text}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
