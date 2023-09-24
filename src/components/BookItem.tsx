interface BookItemProps {
  name: string;
  cover: string;
  isbn: string;
}

const BookItem: React.FC<BookItemProps> = ({ name, cover, isbn }) => {
  return (
    <>
      <h3>{name}</h3>
      {isbn && <h4>ISBN: {isbn}</h4>}
      <img src={cover} alt={`${name} cover`} width={160} />
    </>
  );
};

export default BookItem;
