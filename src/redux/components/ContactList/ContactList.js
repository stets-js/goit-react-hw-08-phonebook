//import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contactsOperations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filteredName = useSelector(state => state.contacts.filter);
  const loader = useSelector(state => state.contacts.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, filteredName]);

  if (!filteredName) {
    return (
      <ul className={css.ul}>
        {loader ? <p>Loading...</p> : null}
        {contacts?.map(({ id, name, number }) => {
          return (
            <li className={css.li} key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={css.btn}
                onClick={() => {
                  dispatch(deleteContact(id));
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
      {loader ? <p>Loading...</p> : null}
      {contacts
        ?.filter(contact =>
          contact.name.toLowerCase().includes(filteredName.toLowerCase())
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
                  dispatch(deleteContact(id));
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
