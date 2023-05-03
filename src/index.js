import React from "react";
import ReactDom from "react-dom/client";
import "./styles/style.css";

// data
import books from "./books";

// components
import Book from "./Book";

const root = ReactDom.createRoot(document.getElementById("root"));

const Booklist = () => {
  return (
    <React.Fragment>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} number={index + 1} key={book.id} />;
        })}
      </section>
    </React.Fragment>
  );
};

root.render(<Booklist />);
