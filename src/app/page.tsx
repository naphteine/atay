import AddAuthor from "@/components/AddAuthor";
import AddBook from "@/components/AddBook";
import AddPublisher from "@/components/AddPublisher";
import Header from "@/components/Header";
import LastAddedAuthors from "@/components/LastAddedAuthors";
import LastAddedBooks from "@/components/LastAddedBooks";
import LastAddedPublishers from "@/components/LastAddedPublishers";

const Home = () => {
  return (
    <>
      <h1>Atay</h1>
      <Header />
      <LastAddedBooks />
      <AddBook />
      <LastAddedAuthors />
      <AddAuthor />
      <LastAddedPublishers />
      <AddPublisher />
    </>
  );
};

export default Home;
