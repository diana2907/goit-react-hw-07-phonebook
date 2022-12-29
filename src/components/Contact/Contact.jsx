import css from 'components/Contact/Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p className={css.contact}>
        {name}: <span className={css.span}> {number}</span>
      </p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
