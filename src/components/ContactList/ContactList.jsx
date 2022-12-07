import { Contact } from 'components/Contact/Contact';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          )
      )}
    </ul>
  );
};
