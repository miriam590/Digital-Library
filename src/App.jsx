import { useState } from "react";
import BookSearch from "./components/BookSearch";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import './App.css'

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" }
];
 function App() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.genre) {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
      setNewBook({ title: "", author: "", genre: "" });
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search) || book.genre.toLowerCase().includes(search)
  );

  return (
    <div className="sec">
      <h1>Place of knowledge📚👨🏿‍🎓👩🏿‍🎓</h1>
      <BookSearch search={search} handleSearch={handleSearch} />
      <BookForm newBook={newBook} handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={filteredBooks} />
    </div>
  );
}
export default App;