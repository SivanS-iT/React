import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact
          contact={contact}
          key={index}
          //favoriteClick={props.favoriteClick}
          //deleteContact={props.deleteContact}
          //updateClick={props.updateClick}
        ></Contact>
      ))}
    </div>
  );
};

export default FavoriteContacts;
