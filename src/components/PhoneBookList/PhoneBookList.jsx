import { useSelector } from "react-redux";
import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
import css from "./PhoneBookList.module.css";

import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from "../../redux/rtk/contacts-api";
import { getFilter } from "../../redux/phonebook-selectors";
import filterContacts from "../../helpers/filterContacts";

const PhoneBookList = () => {
  const { data } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);

  return (
    <ul className={css.ul}>
      {data &&
        filterContacts(data, filter).map(({ name, number, id }) => {
          return (
            <PhoneBookListItem
              onDeleteContact={() => deleteContact(id)}
              key={id}
              name={name}
              number={number}
              id={id}
            />
          );
        })}
    </ul>
  );
};

export default PhoneBookList;
