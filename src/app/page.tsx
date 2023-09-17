export default function Home() {
  const booksData = [
    "Structure and Interpretation of Computer Programs",
    "The Memory Police"
  ];

  return (
    <>
      <header>
        <h1>Atay</h1>
        <em>Book Tracking App</em>
        <hr />
      </header>

      <main>
        <h2>Latest added books</h2>
        <ul>
          {booksData.map((book) => {
            return (
              <li>{book}</li>
            )
          })}
        </ul>

        <h2>Add new book</h2>
        
      </main>

      <footer>
        <hr />
        <p>This service is handworked with love and care by <a href="https://gokaygultekin.dev">Gökay Gültekin</a></p>
      </footer>
    </>
  );
}
