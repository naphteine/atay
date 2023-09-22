interface BookItemProps {
  name: string;
  cover: string;
}

const BookItem: React.FC<BookItemProps> = ({ name, cover }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={cover} alt={`${name} cover`} width={160} />
    </>
  );
};

export default BookItem;