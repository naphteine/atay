import PocketBase from "pocketbase";

export default async function Home() {
  const pb = new PocketBase(process.env.POCKETBASE_URL);

  const booksData = await pb.collection("atay_books").getList(1, 20);

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
          {booksData.items.map((book) => {
            return (
              <li key={book.id}>
                <img
                  width={320}
                  src={`https://duga1.xyz/api/files/${book.collectionId}/${book.id}/${book.cover}`}
                />
                <h3>{book.name}</h3>
                <em>{book.created}</em>
              </li>
            );
          })}
        </ul>

        <h2>Add new book</h2>
      </main>

      <footer>
        <hr />
        <p>
          This service is handworked with love and care by{" "}
          <a href="https://gokaygultekin.dev">Gökay Gültekin</a>
        </p>
      </footer>
    </>
  );
}
