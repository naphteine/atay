import AddAuthor from "@/components/AddAuthor";
import AddBook from "@/components/AddBook";
import Header from "@/components/Header";
import LastAddedAuthors from "@/components/LastAddedAuthors";
import LastAddedBooks from "@/components/LastAddedBooks";

const Home = () => {
  return (
    <>
      <h1>Atay</h1>
      <Header />
      <LastAddedBooks />
      <AddBook />
      <LastAddedAuthors />
      <AddAuthor />
    </>
  );
};

export default Home;
