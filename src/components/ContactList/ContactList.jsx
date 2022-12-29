import { Contact } from 'components/Contact/Contact';
import css from 'components/ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleTasks = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleTasks(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
