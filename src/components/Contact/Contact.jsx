import css from 'components/Contact/Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p className={css.name}>
        {name}:<span className={css.span}>{phone}</span>
      </p>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
