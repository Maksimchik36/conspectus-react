import { NavLink } from "react-router-dom";
import Button from "../Stylization/Button";
import Book from "./Book";

const BooksList = ({ books }) => {
  return (
    <>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <ul>
        {books.map(book => (
          <Book props={book} key={book.id}>{book.name}</Book>
          ))}
      </ul></>
    );
};


export default BooksList;