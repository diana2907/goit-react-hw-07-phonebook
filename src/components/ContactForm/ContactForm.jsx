import css from 'components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name;
    const number = event.target.elements.number;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(`${name.value} is already in contacts`);
    } else {
      dispatch(addContact(name.value, number.value));
    }
    name.value = '';
    number.value = '';
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
