import styles from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <p>
      {contact.name}: {contact.number}
    </p>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;
