function BookList({ books }) {
        return (
          <ul className="book-list">
            {books.length > 0 ? (
              books.map((book) => (
                <li key={book.id} className="book-item">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">Author: {book.author}</p>
                  <p className="book-genre">Genre: {book.genre}</p>
                </li>
              ))
            ) : (
              <p className="no-books">No books found.</p>
            )}
          </ul>
        );
      }
  export default BookList;