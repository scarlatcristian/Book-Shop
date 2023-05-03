const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title ? title : "No title"}</h2>
      <h4 className="author">{author ? `by ${author}` : "Unknown author"}</h4>
      <span className="number">{`#${number}`}</span>
    </article>
  );
};

export default Book;
