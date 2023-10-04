const AddBook = () => {
  return (
    <>
      <h2>Add new book</h2>
      <input placeholder="book name" />
      <input placeholder="isbn" />
      <input type="file" />
      <button>Add book</button>
    </>
  );
};

export default AddBook;
