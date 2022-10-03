//import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { removeContact } from '../../contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);
  const filteredName = useSelector(state => state.filter);
  if (!filteredName) {
    return (
      <ul className={css.ul}>
        {contacts?.map(({ id, name, number }) => {
          return (
            <li className={css.li} key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={css.btn}
                onClick={() => {
                  dispatch(removeContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={css.ul}>
      {contacts
        .filter(contacts =>
          contacts.name.toLowerCase().includes(filteredName.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <li className={css.li} key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={css.btn}
                onClick={() => {
                  dispatch(removeContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//   }

export default ContactList;
