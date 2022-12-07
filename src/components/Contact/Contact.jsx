import css from 'components/Contact/Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  console.log(id);
  return (
    <>
      <p className={css.contact}>
        {name}: <span className={css.span}> {number}</span>
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
