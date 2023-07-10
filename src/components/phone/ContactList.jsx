
export default function List({state,onDeleteContact}) {
const listItems = state.map(contact =>
  <li key={contact.id}>
    <div>
    <p>
      <b>{contact.name}: </b>
        {' ' + contact.number}
        <button
      type="submit"
      onClick={() => onDeleteContact(contact.id)}
    >delete</button>
    </p>
    
    </div>
    
  </li>
);
return <ul>{listItems}</ul>;
}