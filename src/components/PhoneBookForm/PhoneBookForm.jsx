import { connect, useDispatch } from "react-redux";
import css from "./PhoneBookForm.module.css";
import actions from "../../redux/phonebook-actions";
import { useState } from "react";
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from "../../redux/rtk/contacts-api";

function PhoneBookForm({ contacts }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [addContact] = useAddContactsMutation();
  const { data } = useGetContactsQuery();

  const handleSetUserInfo = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.find((el) => el.name === name)) {
      alert(` ${name} is already in contacts!`);
      setName("");
      setNumber("");
      return;
    }
    addContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} action="">
      <label htmlFor="">
        <p>Name</p>
        <input
          onInput={handleSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor="">
        <p>Number</p>
        <input
          onInput={handleSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={css.btn}>Add contact</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.items,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(actions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookForm);
